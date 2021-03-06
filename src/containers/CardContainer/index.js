import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateTypes } from '../../actions';
import { getPokeTypesData } from '../../helper/apiCalls';
import { Card } from '../../components/Card/';
import './CardContainer.css'

export class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }

  componentDidMount() {
    this.getPokeTypes();
  }

  getPokeTypes = async () => {
    try {
      const pokeTypes = await getPokeTypesData();
      this.props.populateTypes(pokeTypes);
    } catch (error) {
      this.setState({ error });
    }
  };

  getPokemon = async (pokemonArr) => {
    const response = await fetch('http://localhost:3001/pokemon/');
    console.log(await response.json());
  };

  render() {
    if (this.props.pokeTypes.length) {
      const allCards = this.props.pokeTypes.map(type => (
        <Card {...type} key={type.id} getPokemon={this.getPokemon} />
      ));
      return <div className="CardContainer" >{allCards}</div>;
    }
    return <img src="../../loading.gif" alt="pika piii!" />;
  }
}

CardContainer.propTypes = {
  populateTypes: PropTypes.func,
  pokeTypes: PropTypes.array
};

export const mapStateToProps = state => ({ pokeTypes: state.types });

export const mapDispatchToProps = dispatch => ({
  populateTypes: pokeTypes => dispatch(populateTypes(pokeTypes))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

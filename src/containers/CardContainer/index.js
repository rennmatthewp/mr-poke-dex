import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateTypes } from '../../actions';
import { getPokeTypesData } from '../../helper/apiCalls';
import { Card } from '../../components/Card/';

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

  render() {
    const allCards = this.props.pokeTypes.map((type, index) => (
      <Card {...type} key={index} />
    ));
    return <div>{allCards}</div>;
    return <div>sure</div>;
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

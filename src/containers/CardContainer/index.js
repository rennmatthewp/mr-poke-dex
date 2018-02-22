import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateTypes } from '../../actions';
import { getPokeTypesData } from '../../helper/apiCalls';

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
    return <img src="../../../loading.gif" alt="pika piii!!" />;
  }
}

CardContainer.propTypes = {
  populateTypes: PropTypes.func,
  pokeTypes: PropTypes.object
};

export const mapStateToProps = state => ({ pokeTypes: state.pokeTypes });

export const mapDispatchToProps = dispatch => ({
  populateTypes: pokeTypes => dispatch(populateTypes(pokeTypes))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

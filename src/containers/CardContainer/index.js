import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { populateTypes } from '../../actions';
import {getPokeTypesData} from '../../helper/apiCalls';

export class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }

  async componentDidMount() {
    this.getPokeTypes();
  }

  getPokeTypes = async () => {
    try {
      const pokeTypes = await getPokeTypesData();
      this.props.populateTypes(pokeTypes);
    } catch(error) {
      this.setState({error});
    }
  }

  render() {
    return <div>CardContainer</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  populateTypes: pokeTypes => dispatch(populateTypes(pokeTypes))
});

export default connect(null, mapDispatchToProps)(CardContainer);

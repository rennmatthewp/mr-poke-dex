import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { populateTypes } from '../../actions';
export class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/types');
    const resolved = await response.json();
    this.props.populateTypes(resolved);
  }

  render() {
    return <div>CardContainer</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  populateTypes: pokeTypes => dispatch(populateTypes(pokeTypes))
});

export default connect(null, mapDispatchToProps)(CardContainer);

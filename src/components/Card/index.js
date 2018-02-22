import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Card.css';

export const Card = ({ type, getPokemon, pokemon }) => {
  console.log('pokemon:', pokemon)
  
  return (
    <div className="card" onClick={() => getPokemon(type.getPokemon)}>
      <h3>{type.name}</h3>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.shape({
    pokemon: PropTypes.array,
    name: PropTypes.string
  })
};

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

export const Card = ({type, getPokemon}) => {  
  
  return (
    <div className="card" onClick={() => getPokemon(type.getPokemon)}>
      <h3>{type.name}</h3>
    </div>
  );
};

Card.propTypes = {
  
};

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

export const Card = ({name, pokemon, getPokemon}) => {  
  
  return (
    <div className="card" onClick={() => getPokemon(pokemon)}>
      <h3>{name}</h3>
    </div>
  );
};

Card.propTypes = {
  
};

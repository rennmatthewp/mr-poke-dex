import { combineReducers } from 'redux';
import { typesReducer } from './types-reducer';
import { pokemonReducer } from './pokemon-reducer'

const rootReducer = combineReducers({
  types: typesReducer,
  pokemon: pokemonReducer
});

export default rootReducer;

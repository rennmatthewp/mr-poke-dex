export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_POKEMON':
      return [...state, ...action.pokeArr];
    default:
      return state;
  }
};

export const typesReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_TYPES':
      return [...action.pokeTypes];
    default:
      return state;
  }
};

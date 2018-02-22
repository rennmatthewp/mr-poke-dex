export const typesReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_TYPES':
      return [...state, ...action.pokeTypes];
    default:
      return state;
  }
};

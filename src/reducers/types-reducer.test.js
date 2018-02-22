import { typesReducer } from './types-reducer';

describe('types reducer', () => {
  it('should return an empy array as default state', () => {
    expect(typesReducer(undefined, {})).toEqual([]);
  });

  it('should return state populated with the action payload', () => {
    const pokeTypes = [{ pika: 'pi' }, {}, {}];
    const action = {
      type: 'POPULATE_TYPES',
      pokeTypes
    };
    expect(typesReducer(undefined, action)).toEqual(pokeTypes);
  });
});

import * as actions from './index';

describe('actions', () => {
  it('should create an action to add poke types', () => {
    const pokeTypes = [{}, {}, {}];
    const expectedAction = {
      type: 'POPULATE_TYPES',
      pokeTypes
    };
    expect(actions.populateTypes(pokeTypes)).toEqual(expectedAction)
  })
})
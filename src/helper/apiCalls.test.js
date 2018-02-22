import { getPokeTypesData } from './apiCalls';
import * as mock from '../mock/mockData';

describe('getPokeTypesData', () => {
  window.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mock.pokeTypes)
    })
  );

  it('should call fetch with the correct args', () => {
    getPokeTypesData();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/types');
  });

  xit('should return a resolved promise', () => {});

  xit('should handle a rejected promise', () => {});
});

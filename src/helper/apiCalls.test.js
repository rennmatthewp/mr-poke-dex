import { getPokeTypesData } from './apiCalls';
import * as mock from '../mock/mockData';

describe('getPokeTypesData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mock.pokeTypes)
      })
    );
  });

  it('should call fetch with the correct args', () => {
    getPokeTypesData();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/types');
  });

  it('should return a resolved promise', () => {
    expect(getPokeTypesData()).resolves.toEqual(mock.pokeTypes);
  });

  it('should handle a rejected promise', () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 500
      })
    );

    expect(getPokeTypesData()).rejects.toEqual('error');
  });
});

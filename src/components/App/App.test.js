import React, { Component } from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />);
    expect(renderedApp).toMatchSnapshot();
  });
});

import React, { Component } from 'react';
import { CardContainer, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let renderedCardContainer;
  let mockPopulateTypes;
  beforeEach(() => {
    mockPopulateTypes = jest.fn();
    renderedCardContainer = shallow(
      <CardContainer poplulateTypes={mockPopulateTypes} />
    );
  });

  it('should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should call the dispatch function when using a fn from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.populateTypes();
    expect(mockDispatch).toHaveBeenCalled();
  });
});

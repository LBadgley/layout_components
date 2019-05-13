import React from 'react';
import { shallow } from 'enzyme';
import Dog from './DogComponent';

describe('dog component tests', () => {
  it('renders a dog with stats', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Color from './ColorComponent';

describe('color component test', () => {
  it('renders the color component', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});

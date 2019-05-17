import React from 'react';
import { shallow } from 'enzyme';
import Header from './HeaderComponent';

describe('header test', () => {
  it('renders the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

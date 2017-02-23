import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './index';

describe('<Header />', () => {
  it('should have a h1 element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';

describe('Traffic lights at in intersection', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should have 4 traffic light element', () => {
    expect(wrapper.find('TrafficLight')).to.have.length(4);
  });

  it('should only be active between 9am and 9:30am', () => {

  });

  it('should change to getReady afer 4 minutes and 30 seconds', () => {

  });

  it('should change to green after 5 minutes', () => {

  });

});

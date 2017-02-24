import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './App';

describe('Traffic lights at in intersection', () => {

  let wrapper;
  let fakeApp;

  beforeEach(() => {
    wrapper = shallow(<App />);
    fakeApp = mount(<App />);
  });

  it('should have 4 traffic light element', () => {
    expect(wrapper.find('TrafficLight')).to.have.length(4);
  });

  it('should only be active between 9am and 9:30am', () => {
    const activeTime = sinon.useFakeTimers(new Date(2017, 1, 24, 9).getTime());
    expect(fakeApp.state().isActive).to.equal(true);
    activeTime.tick(1800000);
    expect(fakeApp.state().isActive).to.equal(false);
  });

  // it('should change to getReady afer 4 minutes and 30 seconds', () => {
  //
  // });
  //
  // it('should change to green after 5 minutes', () => {
  //
  // });

});

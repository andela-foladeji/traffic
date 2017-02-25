import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './App';

describe('Traffic lights at in intersection', () => {

  let wrapper;
  // let fakeApp;
  const actualDate = new Date();
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should have 4 traffic light element', () => {
    expect(wrapper.find('TrafficLight')).to.have.length(4);
  });

  it('should be inactive before 9am', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 8).getTime());
    const fakeApp = mount(<App />);
    expect(fakeApp.state().display).to.equal(false);
  });

  it('should only be active between 9am and 9:30am', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 9).getTime());
    activeTime.tick(60000);
    const fakeApp2 = mount(<App />);
    expect(fakeApp2.state().display).to.equal(true);
  });

  it('should start north & south with stop', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 9).getTime());
    const fakeApp2 = mount(<App />);
    expect(fakeApp2.find('TrafficLight').at(0).children('div').at(0).hasClass('stop')).to.equal(true);
    expect(fakeApp2.find('TrafficLight').at(1).children('div').at(0).hasClass('stop')).to.equal(true);
    // expect(fakeApp2.state().display).to.equal(true);
  });

  it('east and west should have start', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 9).getTime());
    const fakeApp2 = mount(<App />);
    for (let i = 2; i < 4; i += 1) {
      expect(fakeApp2.find('TrafficLight').at(i).children('div').at(2).hasClass('go')).to.equal(true);
    }
    // expect(fakeApp2.state().display).to.equal(true);
  });

  it('all directions should have getReady activated after 4 minutes 30 seconds', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 9).getTime());
    const fakeApp2 = mount(<App />);
    activeTime.tick(270000);
    for (let i = 0; i < 4; i += 1) {
      expect(fakeApp2.find('TrafficLight').at(i).children('div').at(1).hasClass('getReady')).to.equal(true);
    }
    // expect(fakeApp2.state().display).to.equal(true);
  });

  it('should switch north and south to green after 5 minutes', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 9).getTime());
    const fakeApp2 = mount(<App />);
    activeTime.tick(300000);
    for (let i = 0; i < 2; i += 1) {
      expect(fakeApp2.find('TrafficLight').at(i).children('div').at(2).hasClass('go')).to.equal(true);
    }
  });

  it('should switch east and west to red after 5 minutes', () => {
    const activeTime = sinon.useFakeTimers(new Date(actualDate.getFullYear(),
      actualDate.getMonth(), actualDate.getDate(), 9).getTime());
    const fakeApp2 = mount(<App />);
    activeTime.tick(300000);
    for (let i = 2; i < 4; i += 1) {
      expect(fakeApp2.find('TrafficLight').at(i).children('div').at(0).hasClass('stop')).to.equal(true);
    }
  });

  // it('should change to getReady afer 4 minutes and 30 seconds', () => {
  //
  // });
  //
  // it('should change to green after 5 minutes', () => {
  //
  // });

});

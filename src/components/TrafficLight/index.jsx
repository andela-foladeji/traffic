import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
// import { Signal } from 'components';
import './index.scss';

class TrafficLight extends Component {

  constructor() {
    super();
    this.lightClass = [{
      className: 'stop',
      time: 10000,
    }, {
      className: 'getReady',
      time: 5000,
    }, {
      className: 'go',
      time: 10000,
    }];
    this.counter = 0;
    this.state = {
      current: this.lightClass[this.counter],
    };
    this.getClass = this.getClass.bind(this);
  }

  componentWillMount() {
    setInterval(() => {
      this.counter = (this.counter + 1) % 3;
      this.setState({
        current: this.lightClass[this.counter],
      });
    }, this.state.current.time);
  }

  getClass(classToSignal) {
    if (classToSignal === this.state.current.className) {
      return classToSignal;
    }
    return '';
  }

  render() {
    const classNames = classnames('trafficLight', this.props.direction);
    return (
      <div className={classNames}>
        <div className={`signal ${this.getClass('stop')}`} />
        <div className={`signal ${this.getClass('getReady')}`} />
        <div className={`signal ${this.getClass('go')}`} />
      </div>
    );
  }
}

TrafficLight.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default TrafficLight;

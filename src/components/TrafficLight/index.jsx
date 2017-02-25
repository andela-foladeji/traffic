import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './index.scss';

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
    };
    this.getClass = this.getClass.bind(this);
  }

  componentWillMount() {
    if (this.props.direction === 'north' || this.props.direction === 'south') {
      this.counter = 0;
      this.setState({
        current: this.props.allStates[this.counter],
      });
    } else {
      this.counter = 2;
      this.setState({
        current: this.props.allStates[this.counter],
      });
    }
  }

  getClass(classToSignal) {
    if (this.state.current.classToDisplay.indexOf(classToSignal) >= 0
        && this.props.display) {
      return classToSignal;
    }
    return '';
  }

  render() {
    if (this.props.display) {
      setTimeout(() => {
        this.counter = (this.counter + 1) % 4;
        this.setState({
          current: this.props.allStates[this.counter],
        });
      }, this.state.current.time);
    }

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
  display: PropTypes.bool.isRequired,
  allStates: PropTypes.arrayOf(PropTypes.shape({
    classToDisplay: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
  })).isRequired,
};

export default TrafficLight;

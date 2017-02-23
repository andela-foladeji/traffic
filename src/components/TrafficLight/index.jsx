import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Signal } from 'components';
import './index.scss';

const TrafficLight = (props) => {
  const classNames = classnames('trafficLight', props.direction);

  return (
    <div className={classNames}>
      <Signal />
      <Signal />
      <Signal />
    </div>
  );
};

TrafficLight.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default TrafficLight;

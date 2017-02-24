import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './index.scss';

const Signal = (props) => {
  const classNames = classnames('signal', props.state);

  return (
    <div className={classNames} />
  );
};

Signal.propTypes = {
  state: PropTypes.string.isRequired,
};

export default Signal;

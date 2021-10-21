import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import { v4 as uuidv4 } from 'uuid';

export default function Stars({count}) {
  if (count < 1 || count > 5 || isNaN(count) || count === true) return null;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<Star key={uuidv4()} />);    
  }

  return <ul className='card-body-stars u-clearfix'>{stars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

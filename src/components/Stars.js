import React from 'react';
import PropTypes from 'prop-types';
import initStars from './initStars';

export default function Stars({count}) {
  if (count < 1 || count > 5 || isNaN(count) || count === true) return null;
  const stars = initStars.slice(0, count);
  return <ul className='card-body-stars u-clearfix'>{stars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

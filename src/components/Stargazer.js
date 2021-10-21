import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import { v4 as uuidv4 } from 'uuid';

export default function Stargazer({ counts }) {
  const starWrapper = counts.map((count) => <Stars key={uuidv4()} count={count} />);
  return <div>{starWrapper}</div>;
}

Stargazer.propTypes = {
  counts: PropTypes.array.isRequired,
};
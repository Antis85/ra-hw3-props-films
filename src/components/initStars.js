import React from 'react';
import Star from './Star';

const initStars = [];
const countStars = 5;
for (let i = 0; i < countStars; i++) {
  initStars.push(<Star key={i} />);
}

export default initStars;

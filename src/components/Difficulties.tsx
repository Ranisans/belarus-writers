import React from 'react';
import difficulties from '../data/difficulties';
import { Typography } from '@material-ui/core';

const Difficulties = () => {
  const difficultiesItems = difficulties.map((item: string) => (
    <li>
      <Typography variant="body1">{item}</Typography>
    </li>
  ));

  return <ul>{difficultiesItems}</ul>;
};

export default Difficulties;

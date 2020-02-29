import React from 'react';
import { Typography } from '@material-ui/core';
import difficulties from '../data/difficulties';

const Difficulties = () => {
  const difficultiesItems = difficulties.map((item: string, i: number) => (
    <li key={i.toString()}>
      <Typography variant="body1">{item}</Typography>
    </li>
  ));

  return <ul>{difficultiesItems}</ul>;
};

export default Difficulties;

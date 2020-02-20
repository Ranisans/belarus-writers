// import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const ColoredButton = withStyles(() => ({
    root: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  }))(Button);
  
  const OutlinedButton = withStyles(() => ({
    root: {
      color: '#3d4451',
      border: '1px solid #cbcdcf',
      '&:hover': {
        color: '#3d4451',
        border: '1px solid #cbcdcf',
        boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  }))(Button);

  export { ColoredButton, OutlinedButton }
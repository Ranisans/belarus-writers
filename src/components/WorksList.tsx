/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem } from '@material-ui/core';
import theme from '../../static/themes/theme';

import { Works } from '../types';

const useStyles = makeStyles(themeCurrent => {
  return createStyles({
    listLabel: {
      width: '100%',
      textAlign: 'left',
      marginBottom: 0,
      transform: 'translateX(400px)',
      opacity: 0,
      animationDelay: '1s',
      animation: '$slidingTxt 1s ease',
      animationFillMode: 'forwards',
    },
    list: {
      width: '100%',
      marginBottom: 60,
    },
    item: {
      position: 'relative',
      padding: 5,
      transform: 'translateX(400px)',
      opacity: 0,
      animation: '$slidingTxt .5s ease',
      animationFillMode: 'forwards',
    },
    bookMark: {
      position: 'absolute',
      top: 7,
      left: 0,
      width: 33,
      height: 12,
      backgroundColor: themeCurrent.palette.primary.main,
      opacity: 0.7,
      zIndex: -1,
    },
    '@keyframes slidingTxt': {
      '0%': {
        opacity: 0,
        transform: 'translateX(100px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  });
});

interface Props {
  works: Works[];
}

const WorksList = ({ works }: Props) => {
  const classes = useStyles(theme);
  return (
    <>
      <Typography variant="h3" className={classes.listLabel}>
        Works
      </Typography>
      <List component="ul" aria-label="works" className={classes.list}>
        {works.map((item, i) => {
          const delay = 1.5 + 0.1 * i;
          return (
            <ListItem
              component="li"
              key={item.title}
              className={classes.item}
              style={{
                animationDelay: `${delay}s`,
              }}
            >
              <div className={classes.bookMark} />
              <Typography variant="body1">{`${item.title} (${item.date})`}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default WorksList;

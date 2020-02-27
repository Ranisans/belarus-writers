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
    },
    list: {
      width: '100%',
      marginBottom: 60,
    },
    item: {
      position: 'relative',
      padding: 5,
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
        {works.map(({ date, title }: Works) => {
          return (
            <ListItem component="li" key={title} className={classes.item}>
              <div className={classes.bookMark} />
              <Typography variant="body2">{`${title} (${date})`}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default WorksList;

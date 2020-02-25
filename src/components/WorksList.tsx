/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { Typography, List, ListItem } from '@material-ui/core';

import { Works } from '../types';

const useStyles = makeStyles(() => {
  return createStyles({
    listLabel: {
      width: '100%',
      textAlign: 'left',
      marginBottom: 0,
    },
    list: {
      marginBottom: 60,
    },
    item: {
      padding: 5,
    },
  });
});

interface Props {
  works: Works[];
}

const WorksList = ({ works }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.listLabel}>
        <BookmarksIcon color="primary" /> Works
      </Typography>
      <List component="ul" aria-label="works" className={classes.list}>
        {works.map(({ date, title }: Works) => {
          return (
            <ListItem component="li" key={title} className={classes.item}>
              <Typography variant="body2">{`${title} (${date})`}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default WorksList;

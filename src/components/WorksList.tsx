import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { Typography, List, ListItem } from '@material-ui/core';

import { Node, ImgNode, Works } from '../types';

const useStyles = makeStyles(theme => {
  return createStyles({
    list: {
      textAlign: 'left',
    },
  });
});

interface Props {
  works: Works[];
}

const WorksList = ({ works }: Props) => {
  console.log(works);
  return (
    <>
      <Typography variant="h3" style={{textAlign : 'left', marginBottom: 0}}>
        <BookmarksIcon /> Works
      </Typography>
      <List component="ul" aria-label="works" style={{marginBottom: 40}}>
        {works.map(({ date, title }: Works) => {
          return (
            <ListItem component="li" key={title} style={{padding: 5}}>
              <Typography variant="body2">{`${title} (${date})`}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default WorksList;

import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { Typography,  List, ListItem } from '@material-ui/core';

import { Node, ImgNode, Works } from '../types';

const useStyles = makeStyles((theme) => {
  return createStyles({
    primaryContainer: {
      justifyContent: 'space-between',
      height: '100%',
      marginBottom: 50,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        '& div': {
          maxWidth: '100%',
        }
      },
    },
    pageCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      textAlign: 'left',
    }
  });
});

interface Props {
  works: Works[];
}

const WorksList = ({ works }: Props) => {
  console.log(works)
  return (
    <>
      <Typography variant="h3">
        <BookmarksIcon /> Works
      </Typography>
      <List 
        component="ul"
        aria-label="works"
      >
        {works.map(({ date, title}: Works) => {
          return (
            <ListItem component="li">
              <Typography variant='body2'>
                {`${title} (${date})`}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

    export default WorksList;
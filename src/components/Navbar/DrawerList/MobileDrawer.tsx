import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import LinkDataType from '../types';

const listItemStyle = {};

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
  listItemStyle: {
    ...listItemStyle,
  },
  selectedListItemStyle: {
    ...listItemStyle,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
}));

const MobileDrawer = ({
  value,
  categories,
}: {
  value: number;
  categories: LinkDataType[];
}) => {
  const classes = useStyles();

  return (
    <div>
      <List>
        {categories.map((element: LinkDataType, index) => (
          <Link className={classes.link} key={element.text} to={element.link}>
            <ListItem
              className={
                index === value
                  ? classes.selectedListItemStyle
                  : classes.listItemStyle
              }
              button
            >
              <ListItemText primary={element.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MobileDrawer;

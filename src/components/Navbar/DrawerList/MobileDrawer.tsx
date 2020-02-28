import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import LinkDataType from '../types';
import theme from '../../../../static/themes/theme';

const useStyles = makeStyles(themeCurrent => ({
  link: {
    textDecoration: 'none',
  },
  listItemStyle: {
    color: themeCurrent.palette.text.secondary,
  },
  selectedListItemStyle: {
    backgroundColor: themeCurrent.palette.primary.main,
    opacity: 0.8,
    '&:hover': {
      backgroundColor: themeCurrent.palette.primary.main,
    },
  },
}));

const MobileDrawer = ({
  value,
  categories,
}: {
  value: number;
  categories: LinkDataType[];
}) => {
  const classes = useStyles(theme);

  return (
    <div>
      <List>
        {categories.map((element: LinkDataType, index) => (
          <Link className={classes.link} key={element.text} to={element.link}>
            <ListItem
              className={index === value ? classes.selectedListItemStyle : ''}
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

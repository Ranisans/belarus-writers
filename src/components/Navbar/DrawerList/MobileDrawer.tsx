import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'gatsby';

import LinkDataType from '../types';

const MobileDrawer = ({ categories }: { categories: LinkDataType[] }) => {
  return (
    <div>
      <List>
        {categories.map((element: LinkDataType) => (
          <Link key={element.text} to={element.link}>
            <ListItem button>
              <ListItemText primary={element.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MobileDrawer;

import React from 'react';
import {
  Hidden,
  Drawer,
  IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import MobileDrawer from './MobileDrawer';
import LinkDataType from '../types';
import theme from '../../../../static/themes/theme';

interface PropType {
  categories: LinkDataType[];
  handleDrawerToggle: any;
  mobileOpen: any;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

const DrawerList = ({
  categories,
  handleDrawerToggle,
  mobileOpen,
}: PropType) => {
  const classes = useStyles(theme);
  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          <MobileDrawer categories={categories} />
        </Drawer>
      </Hidden>
    </>
  );
};

export default DrawerList;

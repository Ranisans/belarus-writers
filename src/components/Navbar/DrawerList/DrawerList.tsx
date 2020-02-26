import React from 'react';
import { Hidden, Drawer, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import MobileDrawer from './MobileDrawer';
import LinkDataType from '../types';
import theme from '../../../../static/themes/theme';

interface PropType {
  categories: LinkDataType[];
  handleDrawerToggle: any;
  mobileOpen: any;
  value: number;
}

const drawerWidth = 180;

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  closeMenuButton: {
    marginLeft: 'auto',
  },
}));

const DrawerList = ({
  categories,
  handleDrawerToggle,
  mobileOpen,
  value,
}: PropType) => {
  const classes = useStyles();
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
          <MobileDrawer value={value} categories={categories} />
        </Drawer>
      </Hidden>
    </>
  );
};

export default DrawerList;

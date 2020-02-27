import React from 'react';
import { Hidden, Drawer, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, createStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(themeThere => {
  return createStyles({
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: themeThere.palette.background.default,
      opacity: 0.9,
    },
  });
});

const DrawerList = ({
  categories,
  handleDrawerToggle,
  mobileOpen,
  value,
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
            style={{ marginLeft: 'auto' }}
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

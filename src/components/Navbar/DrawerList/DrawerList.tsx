import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import MobileDrawer from './MobileDrawer';
import LinkDataType from '../types';

interface PropType {
  categories: LinkDataType[];
  handleDrawerToggle: any;
  classes: any;
  mobileOpen: any;
  theme: any;
}

const DrawerList = ({
  categories,
  handleDrawerToggle,
  theme,
  mobileOpen,
  classes,
}: PropType) => {
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

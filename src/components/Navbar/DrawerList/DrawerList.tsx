import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MobileDrawer from './MobileDrawer';

const DrawerList = ({
  dummyCategories,
  handleDrawerToggle,
  theme,
  mobileOpen,
  classes,
}: {
  dummyCategories: string[];
  handleDrawerToggle: any;
  theme: any;
  mobileOpen: any;
  classes: any;
}) => {
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
          <MobileDrawer dummyCategories={dummyCategories} />
        </Drawer>
      </Hidden>
    </>
  );
};

export default DrawerList;

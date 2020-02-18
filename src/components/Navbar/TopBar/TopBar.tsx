import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TopBar = ({
  classes,
  dummyCategories,
  handleDrawerToggle,
  value,
  handleChange,
}: {
  classes: any;
  dummyCategories: string[];
  handleDrawerToggle: any;
  value: any;
  handleChange: any;
}) => {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              // indicatorColor="primary"
              // textColor="primary"
              // centered
            >
              {dummyCategories.map((text: string) => (
                <Tab label={text} key={text} />
              ))}
            </Tabs>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;

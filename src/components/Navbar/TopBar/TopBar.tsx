import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import LinguisticList from './LinguisticList';
import LinkDataType from '../types';

const useStyles = makeStyles(() => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface PropType {
  categories: LinkDataType[];
  handleDrawerToggle: () => void;
  value: number;
  classes: any;
}

const TopBar = ({
  categories,
  handleDrawerToggle,
  value,
  classes,
}: PropType) => {
  const toolBarClasses = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={toolBarClasses.toolBar}>
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
            <Tabs value={value} indicatorColor="secondary">
              {categories.map((category: LinkDataType) => (
                <Link key={category.text} to={category.link}>
                  <Tab label={category.text} />
                </Link>
              ))}
            </Tabs>
          </Typography>
          <LinguisticList />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;

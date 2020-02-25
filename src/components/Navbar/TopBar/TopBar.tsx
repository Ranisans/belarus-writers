import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import LinguisticList from './LinguisticList';
import LinkDataType from '../types';
import theme from '../../../../static/themes/theme';

const useStyles = makeStyles(thisTheme => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appBar: {
    zIndex: thisTheme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: thisTheme.spacing(2),
    [thisTheme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: thisTheme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: thisTheme.palette.secondary.light,
      transition: 'color .2s',
    },
  },
  tabs: {
    [thisTheme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

interface PropType {
  categories: LinkDataType[];
  handleDrawerToggle: () => void;
  value: number;
}

const TopBar = ({ categories, handleDrawerToggle, value }: PropType) => {
  const classes = useStyles(theme);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
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
                <Tab
                  label={category.text}
                  className={classes.link}
                  key={category.text}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...({ component: Link, to: `${category.link}` } as any)}
                />
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

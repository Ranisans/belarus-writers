import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import LinguisticList from './LinguisticList';
import LinkDataType from '../types';
import theme from '../../../../static/themes/theme';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.light,
      transition: 'color .2s',
    }
  },
  tabs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

interface PropType {
  categories: LinkDataType[];
  handleDrawerToggle: () => void;
  value: number;
}

const TopBar = ({
  categories,
  handleDrawerToggle,
  value,
}: PropType) => {
  const classes = useStyles(theme);
  console.log(classes)
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
                <Link 
                  key={category.text} 
                  to={category.link}
                  className={classes.link}
                >
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

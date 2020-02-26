import React, { useEffect, useState } from 'react';
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

const base = {
  background: 'transparent',
  boxShadow: 'none',
  transition:
    'transform 400ms ease-out 100ms, padding 300ms ease-out, box-shadow 300ms ease-out, background 300ms ease-out',
};

const useStyles = makeStyles(thisTheme => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [thisTheme.breakpoints.down('sm')]: {
      minHeight: '40px',
    },
  },
  base: {
    ...base,
  },
  activeScroll: {
    ...base,
    background: thisTheme.palette.primary.main,
    height: '70px',
    boxShadow:
      '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
    [thisTheme.breakpoints.down('sm')]: {
      height: '45px',
    },
  },
  menuButton: {
    marginRight: thisTheme.spacing(2),
    [thisTheme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    color: thisTheme.palette.secondary.main,
    textDecoration: 'none',
    marginRight: '10px',
    minWidth: '130px',

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      background: '#FFF',
      visibility: 'hidden',
      borderRadius: '5px',
      transform: 'scaleX(0)',
      transition: '.25s linear',
    },

    '&:hover': {
      '&::before': {
        visibility: 'visible',
        transform: 'scaleX(1)',
      },
    },
  },
  tabs: {
    [thisTheme.breakpoints.down('sm')]: {
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

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(!scrolled);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <AppBar
        position="fixed"
        className={scrolled ? classes.activeScroll : classes.base}
      >
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

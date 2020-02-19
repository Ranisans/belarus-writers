import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import DrawerList from './DrawerList/DrawerList';
import TopBar from './TopBar/TopBar';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  tabs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

function ResponsiveDrawer() {
  const dummyCategories: string[] = [
    'Main',
    'List',
    'Team',
    'Work log',
    'Style Guide',
  ];

  const [value, setValue] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles();

  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        classes={classes}
        handleDrawerToggle={handleDrawerToggle}
        value={value}
        handleChange={handleChange}
        dummyCategories={dummyCategories}
      />
      <nav className={classes.drawer}>
        <DrawerList
          theme={theme}
          classes={classes}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          dummyCategories={dummyCategories}
        />
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
      </div>
    </div>
  );
}

export default ResponsiveDrawer;

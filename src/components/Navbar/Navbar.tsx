import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';

import DrawerList from './DrawerList/DrawerList';
import TopBar from './TopBar/TopBar';
import LinkDataType from './types';

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

interface PropTypes {
  activeTab: number;
}

function ResponsiveDrawer({ activeTab }: PropTypes) {
  const intl = useIntl();
  const categories: LinkDataType[] = [
    {
      text: intl.formatMessage({ id: 'navbar.main' }),
      link: `/${intl.locale}/`,
    },
    {
      text: intl.formatMessage({ id: 'navbar.list' }),
      link: `/${intl.locale}/writers`,
    },
    {
      text: intl.formatMessage({ id: 'navbar.team' }),
      link: `/${intl.locale}/`,
    },
    {
      text: intl.formatMessage({ id: 'navbar.workLog' }),
      link: `/${intl.locale}/worklog`,
    },
    {
      text: intl.formatMessage({ id: 'navbar.styleGuide' }),
      link: `/${intl.locale}/style-guide`,
    },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles();

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        classes={classes}
        handleDrawerToggle={handleDrawerToggle}
        value={activeTab}
        categories={categories}
      />
      <nav className={classes.drawer}>
        <DrawerList
          theme={theme}
          classes={classes}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          categories={categories}
        />
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
      </div>
    </div>
  );
}

export default ResponsiveDrawer;

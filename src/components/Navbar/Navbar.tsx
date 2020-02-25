import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';

import DrawerList from './DrawerList/DrawerList';
import TopBar from './TopBar/TopBar';
import LinkDataType from './types';
import theme from '../../../static/themes/theme';

const drawerWidth = 240;
const useStyles = makeStyles(thisTheme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [thisTheme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: thisTheme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: thisTheme.spacing(3),
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

  const classes = useStyles(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        handleDrawerToggle={handleDrawerToggle}
        value={activeTab}
        categories={categories}
      />
      <nav className={classes.drawer}>
        <DrawerList
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

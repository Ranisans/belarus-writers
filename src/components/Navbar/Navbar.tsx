import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';

import DrawerList from './DrawerList/DrawerList';
import TopBar from './TopBar/TopBar';
import LinkDataType from './types';
import theme from '../../../static/themes/theme';

const drawerWidth = 240;
const useStyles = makeStyles(styleTheme => ({
  root: { width: '100%', height: '100%' },
  palette: {
    primary: {
      main: 'rgb(255, 255, 255) transparent',
      contrastText: '#FFFFFF',
    },
  },
  headerBg: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute',
    backgroundSize: 'contain',
    backgroundColor: '#FFFFFF',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    height: '250px',
    width: '100%',
    '&::before': {
      content: '""',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(55,9,7,0.1)',
      boxShadow: '0px 5px 10px -2px rgba(0,0,0,0.75)',
    },
  },
  drawer: {
    [styleTheme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: styleTheme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: styleTheme.spacing(3),
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

  const backgroundData = useStaticQuery(graphql`
    query {
      file(base: { eq: "background4.jpg" }) {
        childImageSharp {
          fixed(width: 1133) {
            src
          }
        }
      }
    }
  `);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.headerBg}
        style={{
          backgroundImage: `url(${backgroundData.file.childImageSharp.fixed.src})`,
        }}
      />
      <CssBaseline />
      <TopBar
        handleDrawerToggle={handleDrawerToggle}
        value={activeTab}
        categories={categories}
      />
      <nav className={classes.drawer}>
        <DrawerList
          value={activeTab}
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

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
  shadow: {
    boxShadow: '0px 5px 10px -2px rgba(0,0,0,0.75)',
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

function Navbar({ activeTab }: PropTypes) {
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
      link: `/${intl.locale}/team`,
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
      imageSharp(fluid: { originalName: { eq: "bg.jpg" } }) {
        fluid(
          srcSetBreakpoints: [1800, 1200, 800, 400, 320]
          fit: COVER
          maxWidth: 1800
        ) {
          src
          srcSet
          base64
          sizes
          aspectRatio
          originalName
        }
      }
    }
  `);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerBg = {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.background,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0 ',
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
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0px 5px 10px -2px rgba(0,0,0,0.75)',
    },
  };

  return (
    <div className={classes.root}>
      <Img
        fluid={backgroundData.imageSharp.fluid}
        style={headerBg}
        className={classes.shadow}
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

export default Navbar;

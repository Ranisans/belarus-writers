import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  makeStyles,
  // Theme,
  createStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import theme from '../../static/themes/theme';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

interface PropsType {
  children: React.ReactNode;
  tabIndex: number;
}

const useStyles = makeStyles((/* theme: Theme */) =>
  createStyles({
    root: {
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },

    content: {
      flexGrow: 1,
    },

    main: {
      position: 'relative',
      background: 'white',
      top: '100px',
      maxWidth: '1024px',
      margin: '0 auto',
      paddingBottom: 50,
      zIndex: '2',
    },
  }));

const TemplateWrapper = ({ children, tabIndex }: PropsType) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          <Navbar activeTab={tabIndex} />
          <main className={classes.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;

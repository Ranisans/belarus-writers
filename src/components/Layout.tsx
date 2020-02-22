import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../static/themes/theme';

import Navbar from './Navbar/Navbar';
import Footer from './Footer';

interface PropsType {
  children: React.ReactNode;
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  content: {
    flexGrow: 1,
  },
  
  main: {
    maxWidth: '1024px',
    margin: '0 auto', 
  }
}))

const TemplateWrapper = ({ children }: PropsType) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          <Navbar />
          <main className={classes.main}>{children}</main>
        </div>     
        <Footer />
      </div>
    </ThemeProvider>
  )
};

export default TemplateWrapper;

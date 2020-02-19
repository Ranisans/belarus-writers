import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


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
    <div >
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          <Navbar />
          <main className={classes.main}>{children}</main>
        </div>     
        <Footer />
      </div>
    </div>
  )
};

export default TemplateWrapper;

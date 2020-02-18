import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },

  footer: {
    padding: '1rem',
  },

  copyrightText: {
    textAlign: 'center',
  }
}));


const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <CssBaseline />
      <footer>
        <AppBar position='static' className={classes.footer}>
          <Typography className={classes.copyrightText}>
            <CopyrightIcon fontSize="small" /> {currentYear} All Rights Reserved.
          </Typography>
        </AppBar>
      </footer>
    </>
  )
};

export default Footer;

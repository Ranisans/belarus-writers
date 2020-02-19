import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GithubAccount from './GithubAccount';
import {team} from '../data/team';


const useStyles = makeStyles((theme: Theme) => createStyles({
  footer: {
    position: 'static',
    padding: '0.2rem'
  },
  
  githubWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  copyrightText: {
    textAlign: 'center',
  }
}));


const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <CssBaseline />
      <footer>
        <AppBar className={classes.footer}>
          <div className={classes.githubWrapper}>
            {
              team.map(({ nickname, avatar }, index) => {
                return <GithubAccount key={index} nickname={nickname} avatar={avatar} />
              })
            }
          </div>
          

          <Typography className={classes.copyrightText}>
            <CopyrightIcon fontSize="small" /> {currentYear} All Rights Reserved.
          </Typography>
        </AppBar>
      </footer>
    </>
  )
};

export default Footer;

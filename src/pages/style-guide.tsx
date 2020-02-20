import React from 'react';
import {
  makeStyles, 
  createStyles, 
  Theme, 
  ThemeProvider
} from '@material-ui/core/styles';
import { 
  Typography, 
  Grid, 
  CssBaseline,
  Container,
  Divider,
} from '@material-ui/core';

import Layout from '../components/Layout';
import ResponsiveDrawer from '../components/Navbar/Navbar';
import { ColoredButton, OutlinedButton } from '../components/Buttons'
import theme from '../../static/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '25px',
      '& > button': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const Typos = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        Headers
      </Typography>
      <Divider light />
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>      
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
    </Grid>
  )
}

const Buttons = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="h2">Buttons</Typography>      
      <Divider light/>
      <div className={classes.root}>
        <ColoredButton variant="contained" color="primary" size="medium">
          Primary
        </ColoredButton>
        <OutlinedButton variant="outlined" size="medium" color="secondary">
          Outlined
        </OutlinedButton>
      </div>
    </Container>
  )
}

const NavBars = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2">Navbar</Typography>
      <Divider light/>
      <ResponsiveDrawer />
    </Container>
  )
}
const StyleGuide = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <CssBaseline />
        <Container maxWidth="lg">
          <h1>StyleGuide</h1>
          <Grid container spacing={3}>
            <Buttons />          
            <Typos />
            <NavBars />
          </Grid>
        </Container>
    </Layout>
  </ThemeProvider>
);

export default StyleGuide;

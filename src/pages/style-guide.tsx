import React, { useState } from 'react';
import {
  makeStyles, 
  createStyles, 
  Theme, 
  ThemeProvider,
  styled
} from '@material-ui/core/styles';
import { 
  Typography, 
  Grid, 
  CssBaseline,
  Container,
  ButtonGroup,
  Button,
  Tooltip,
  Box
} from '@material-ui/core';
import { compose, spacing, palette } from '@material-ui/system';

import Layout from '../components/Layout';
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
    navBtn: {
      color: '#3d4451',
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    btnsGroup: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
      marginBottom: '25px',
    },
    grid: {
      minHeight: '400px',
    },
    typoToShow: {
      marginBottom: '25px',
    },
    tooltip: {
      maxWidth: 130,
    }
  }),
);

const Typos = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Tooltip 
        title="font-size: 2.25rem, font-weight: bold, color: #3d4451, margin: 10px 0 30px" placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="h1" className={classes.typoToShow}>
          h1. Heading
        </Typography>
      </Tooltip>
      <Tooltip 
        title="font-size: 1.875rem, font-weight: bold, color: #3d4451, margin: 10px 0 20px" placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="h2" className={classes.typoToShow}>
          h2. Heading
        </Typography> 
      </Tooltip>
      <Tooltip 
        title="font-size: 1.25rem, color: #000000, margin: 10px 0 10px"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="body1" className={classes.typoToShow}>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Tooltip>
      <Tooltip 
        title="font-size: 1rem, color: rgb(61, 68, 81), margin: 10px 0 10px"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="body2" className={classes.typoToShow}>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Tooltip>
      <Tooltip 
        title="font-size: 1rem, color: rgb(61, 68, 81)"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="button" display="block" className={classes.typoToShow}>
          button text
        </Typography>
      </Tooltip>
      <Tooltip 
        title="font-size: .8rem, color: rgb(61, 68, 81)"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="caption" display="block" className={classes.typoToShow}>
          caption text
        </Typography>
      </Tooltip>
    </Grid>
  )
}

const Buttons = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
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

const Box = styled('div')(
  compose(
    spacing,
    palette,
  ),
);

const Colors = () => {
  return(
    <>
    <Typography variant="body1">Primary</Typography>
      <Grid item xs={12}>
        <Box color="white" bgcolor="palevioletred" p={1}>
          JSS
        </Box>
      </Grid>
    </>
  )
}

const StyleGuide = () => {
  const classes = useStyles();
  const [navTarget, setNavTarget] = useState('typo');

  return (
  <ThemeProvider theme={theme}>
    <Layout>
      <CssBaseline />
        <Container maxWidth="lg">
          <h1>StyleGuide</h1>
          <ButtonGroup 
            variant="text" 
            color="primary" 
            aria-label="text primary button group" 
            className={classes.btnsGroup}
          >
            <Button className={classes.navBtn} onClick={() => setNavTarget('typo')}>
              Typography
            </Button>
            <Button className={classes.navBtn} onClick={() => setNavTarget('btns')}>
              Buttons
            </Button>
            <Button className={classes.navBtn} onClick={() => setNavTarget('colors')}>
              Colors
            </Button> 
            {/* <Button className={classes.navBtn} onClick={() => setNavTarget('nav-bar')}>
              Theme
            </Button> */}
          </ButtonGroup>
          <Grid container spacing={3} className={classes.grid}>
            {navTarget === 'btns' ? <Buttons /> : null}
            {navTarget === 'typo' ? <Typos /> : null}
            {/* {navTarget === 'nav-bar' ? <NavBars /> : null} */}
            {navTarget === 'colors' ? <Colors /> : null}
          </Grid>
        </Container>
    </Layout>
  </ThemeProvider>
)};

export default StyleGuide;

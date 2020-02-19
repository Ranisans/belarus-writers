import React from 'react';
import { 
  createMuiTheme,
  useTheme,
  makeStyles, 
  createStyles, 
  Theme, 
  withStyles,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { 
  Typography, 
  Grid, 
  CssBaseline,
  Container,
  Button,
  Divider 
} from '@material-ui/core';

import Layout from '../components/Layout';

import Didot from '../../static/fonts/Didot.woff';

const didot = {
  fontFamily: 'Didot',
  fontStyle: 'normal',
  fontWeight: '400',
  src: `
    local('Didot'),
    url(${Didot}) format('woff')
  `,
};


let theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#E8676B',
      dark: '#E8676B',
      contrastText: '#FFFFF',
    },
    secondary: {
      main: '#EFEFEF',
      dark: '#EFEFEF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#3d4451',
    },
    text: {
      primary: '#3d4451',
      secondary: 'red',
    }
  },
  typography: {
    fontFamily: 'Didot',
    fontSize: 16,
    h1: {
      fontSize: '2.25rem',
      lineHeight: '1.2',
      fontWeight: 'bold',
      color: '#3d4451',
      margin: '10px 0',
    },
    h2: {
      fontSize: '1.875rem',
      lineHeight: '1.2',
      fontWeight: 'bold',
      color: '#3d4451',
      margin: '10px 0',
    },
    // button: {
    //   fontSize: '.94rem',
    //   lineHeight: '1',
    //   fontWeight: 'normal',
    //   color: '#3d4451',
    //   padding: '15px 20px',
    // }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [didot],
      },
    },
  },
});
theme = responsiveFontSizes(theme);

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
  const theme = useTheme();
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

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[500],
      opacity: '0.95',
      boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
    },
  },
}))(Button);

const OutlinedButton = withStyles((theme: Theme) => ({
  root: {
    color: '#3d4451',
    border: '1px solid #cbcdcf',
    // backgroundColor: red[500],
    '&:hover': {
      color: '#3d4451',
      border: '1px solid #cbcdcf',
      backgroundColor: 'transparent',
      opacity: '0.95',
      boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
    },
  },
}))(Button);

const Buttons = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="h2">Buttons</Typography>      
      <Divider light/>
      <div className={classes.root}>
        <Button variant="contained" color="primary">Primary Default</Button>
        <Button variant="contained" color="secondary">secondary Default</Button>
        <ColorButton variant="contained" size="medium">
          Primary
        </ColorButton>
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

    </Container>
  )
}
const StyleGuide = () => (
  <Layout>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div>Hello this font must be didot</div>
        <Grid container spacing={3}>
          <Buttons />          
          <Typos />
          <NavBars />
        </Grid>
      </Container>
    </ThemeProvider>
  </Layout>
);

export default StyleGuide;

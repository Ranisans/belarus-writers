import React, { useState } from 'react';
import {
  makeStyles, 
  createStyles, 
  Theme, 
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  Grid, 
  CssBaseline,
  Container,
  ButtonGroup,
  Button,
} from '@material-ui/core';

import Layout from '../components/Layout';
import { ColoredButton, OutlinedButton } from '../components/Styleguide/Buttons'
import Palette from '../components/Palette';
import Typos from '../components/Styleguide/Typos';
import Instruction from '../components/Styleguide/Instruction';

import theme from '../../static/themes/theme';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    marginBottom: '25px',
    '& > button': {
      margin: theme.spacing(1),
    },
  },
  btnsGroup: {
    marginBottom: '25px',
  },
  grid: {
    minHeight: '400px',
  },
}),
);


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

const StyleGuide = () => {
  const classes = useStyles();
  const styleguideNav = ['Typography', 'Buttons', 'Colors', 'Instruction'];

  const [navTarget, setNavTarget] = useState(styleguideNav[0]);
  const [themeType, setThemeType] = useState('light');
  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <ThemeProvider theme={currentTheme}>
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
              {styleguideNav.map((item) => (
                <Button
                  key={item}
                  variant="text" 
                  color="secondary"
                  onClick={() => setNavTarget(item)}
                >
                  {item}
                </Button>
              ))}
            </ButtonGroup>
            <Grid container spacing={3} className={classes.grid}>
              {navTarget === 'Typography' ? <Typos /> : null}
              {navTarget === 'Buttons' ? <Buttons /> : null}
              {navTarget === 'Colors' ? <Palette /> : null}
              {navTarget === 'Instruction' ? <Instruction /> : null}
            </Grid>
          </Container>
      </Layout>
    </ThemeProvider>
)};

export default StyleGuide;

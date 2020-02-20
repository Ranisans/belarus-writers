import React, { useState, useEffect } from 'react';
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
import theme from '../../static/themes/theme';
import themeDark from '../../static/themes/theme-dark';
import Typos from '../components/Styleguide/Typos';
import Instruction from '../components/Styleguide/Instruction';

const Buttons = ({ classes }) => {
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
  const [navTarget, setNavTarget] = useState('typo');
  const [themeType, setThemeType] = useState('light');
  const [currentTheme, setCurrentTheme] = useState(theme);
  
  useEffect(()=> {
    if (themeType === 'light') {
      setCurrentTheme(theme);
    } else {
      setCurrentTheme(themeDark);
    }
  }, [themeType]);


  const themeHandler = () => {
    setThemeType((prev) => (prev === 'light') ? 'dark' : 'light');
  }

  const useStyles = makeStyles((currentTheme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        marginBottom: '25px',
        '& > button': {
          margin: currentTheme.spacing(1),
        },
      },
      btnsGroup: {
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
      },
      code: {
        color: '#FFFFFF',
        backgroundColor: 'rgb(55, 59, 66)',
        padding: 15,
        margin: '15px 0'
      },
    }),
  );

  let classes = useStyles(currentTheme);
  const styleguideNav = ['Typography', 'Buttons', 'Colors', 'Instruction'];
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
            <ColoredButton 
              variant="contained" 
              color="primary" 
              size="medium" 
              onClick={themeHandler}>
            Theme toggler
          </ColoredButton>
            <Grid container spacing={3} className={classes.grid}>
              {navTarget === 'Typography' ? <Typos classes={classes}/> : null}
              {navTarget === 'Buttons' ? <Buttons classes={classes} /> : null}
              {navTarget === 'Colors' ? <Palette /> : null}
              {navTarget === 'Instruction' ? <Instruction classes={classes} /> : null}
            </Grid>
          </Container>
      </Layout>
    </ThemeProvider>
)};

export default StyleGuide;

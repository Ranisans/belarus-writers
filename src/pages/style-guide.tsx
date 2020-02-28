import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  CssBaseline,
  Container,
  ButtonGroup,
  Button,
  Typography,
} from '@material-ui/core';

import Layout from '../components/Layout';
import {
  ColoredButton,
  OutlinedButton,
} from '../components/Styleguide/Buttons';
import Palette from '../components/Palette';
import Typos from '../components/Styleguide/Typos';
import Instruction from '../components/Styleguide/Instruction';
import tabs from '../data/tabsName';

import theme from '../../static/themes/theme';

const useStyles = makeStyles(thisTheme => {
  return createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '25px',
      '& > button': {
        margin: thisTheme.spacing(1),
      },
    },
    btnsGroup: {
      marginBottom: '40px',
    },
    btn: {
      color: thisTheme.palette.primary.main,
    },
    grid: {
      minHeight: '400px',
    },
  });
});

const Buttons = () => {
  const classes = useStyles(theme);
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
  );
};

const StyleGuide = () => {
  const classes = useStyles(theme);
  const styleguideNav = ['Typography', 'Buttons', 'Colors', 'Instruction'];

  const [navTarget, setNavTarget] = useState(styleguideNav[0]);

  return (
    <Layout tabIndex={tabs.styleGuide}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h1">StyleGuide</Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          className={classes.btnsGroup}
        >
          {styleguideNav.map(item => (
            <Button
              key={item}
              variant="text"
              style={{ color: theme.palette.text.secondary }}
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
  );
};

export default StyleGuide;

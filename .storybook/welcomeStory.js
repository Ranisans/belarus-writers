import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../static/themes/theme';

storiesOf('Welcome', module).add('to Storybook of Culture Portal', () => (
  <ThemeProvider theme={theme}>
    <Typography variant="h1" style={{ margin: 30 }} color="primary">
      {`Storybook of `}
      <Link href="https://belarus-writers.netlify.com/ru/" color="inherit">
        Culture Portal
      </Link>
    </Typography>
    <Typography variant="body1" style={{ marginLeft: 30 }}>
      Here you can see components used in this project.
    </Typography>
  </ThemeProvider>
));

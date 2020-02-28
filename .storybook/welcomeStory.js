import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../static/themes/theme';

storiesOf('Welcome', module).add('to Storybook of Culture Portal', () => (
  <ThemeProvider theme={theme}>
    <Typography
      variant="h1"
      style={{ margin: 30, textAlign: 'center' }}
      color="primary"
    >
      {`Storybook of `}
      <Link href="https://belarus-writers.netlify.com/ru/" color="inherit">
        Culture Portal
      </Link>
    </Typography>
  </ThemeProvider>
));

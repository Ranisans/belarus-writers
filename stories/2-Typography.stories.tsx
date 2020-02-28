import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../static/themes/theme';
import Typos from '../src/components/Styleguide/Typos';

export default {
  title: 'Typography',
  component: Typos,
};

export const Typography = () => (
  <ThemeProvider theme={theme}>
    <Typos />
  </ThemeProvider>
);

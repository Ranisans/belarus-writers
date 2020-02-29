import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Palette from '../src/components/Palette';
import theme from '../static/themes/theme';

export default {
  title: 'Colors',
  component: Palette,
};

export const Colors = () => (
  <ThemeProvider theme={theme}>
    <Palette />
  </ThemeProvider>
);

/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import SearchComponent from '../src/components/Search';
import theme from '../static/themes/theme';

export default {
  title: 'Input',
  component: SearchComponent,
};

export const Input = () => (
  <ThemeProvider theme={theme}>
    <SearchComponent query="" handleChange={() => 0} />
  </ThemeProvider>
);

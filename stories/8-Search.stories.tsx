/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import SearchComponent from '../src/components/Search';
import theme from '../static/themes/theme';

export const Search = () => (
  <ThemeProvider theme={theme}>
    <SearchComponent query="" handleChange={() => 0} />
  </ThemeProvider>
);

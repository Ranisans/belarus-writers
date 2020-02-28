import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../static/themes/theme';
import Gallery from '../src/components/Gallery/Gallery';

export default {
  title: 'Gallery',
  component: Gallery,
};

export const NavbarComponent = () => (
  <ThemeProvider theme={theme}>
    <Gallery images={[]} allImages={[]} />
  </ThemeProvider>
);

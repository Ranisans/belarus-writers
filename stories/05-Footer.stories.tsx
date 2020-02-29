import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import FooterComponent from '../src/components/Footer';
import theme from '../static/themes/theme';

export default {
  title: 'Footer',
  component: FooterComponent,
};

export const Footer = () => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100vh',
      }}
    >
      <FooterComponent />
    </div>
  </ThemeProvider>
);

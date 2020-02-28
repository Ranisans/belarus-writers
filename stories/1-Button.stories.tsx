import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  ColoredButton,
  OutlinedButton,
} from '../src/components/Styleguide/Buttons';
import theme from '../static/themes/theme';

export default {
  title: 'Buttons',
  component: ColoredButton,
};

export const ButtonColored = () => (
  <ThemeProvider theme={theme}>
    <ColoredButton
      variant="contained"
      color="primary"
      size="medium"
      onClick={action('clicked')}
    >
      Contained
    </ColoredButton>
  </ThemeProvider>
);

export const ButtonOutlined = () => (
  <ThemeProvider theme={theme}>
    <OutlinedButton
      variant="outlined"
      color="primary"
      size="medium"
      onClick={action('clicked')}
    >
      Outlined
    </OutlinedButton>
  </ThemeProvider>
);

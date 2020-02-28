import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  ColoredButton,
  OutlinedButton,
} from '../src/components/Styleguide/Buttons';
import theme from '../static/themes/theme';

export default {
  title: 'Buttons',
  component: Button,
};

export const ButtonColored = () => (
  <ThemeProvider theme={theme}>
    <ColoredButton variant="contained" color="primary" size="medium">
      Contained
    </ColoredButton>
  </ThemeProvider>
);

export const ButtonOutlined = () => (
  <ThemeProvider theme={theme}>
    <OutlinedButton variant="outliied" color="primary" size="medium">
      Outlined
    </OutlinedButton>
  </ThemeProvider>
);

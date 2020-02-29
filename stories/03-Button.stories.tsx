/* eslint-disable import/prefer-default-export */
import React from 'react';
import { withActions, action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  ColoredButton,
  OutlinedButton,
} from '../src/components/Styleguide/Buttons';
import theme from '../static/themes/theme';

export default {
  title: 'Buttons',
  decorators: [withActions('mouseover')],
};

export const ButtonColored = () => (
  <ThemeProvider theme={theme}>
    <ColoredButton
      variant={text('contained/outlined/text', 'contained')}
      color={text('primary/secondary/default/inherit', 'primary')}
      size={text('small/medium/large', 'medium')}
      onClick={action('clicked')}
    >
      Contained
    </ColoredButton>
  </ThemeProvider>
);

export const ButtonOutlined = () => (
  <ThemeProvider theme={theme}>
    <OutlinedButton
      variant={text('contained/outlined/text', 'outlined')}
      size={text('small/medium/large', 'medium')}
      color={text('primary/secondary/default/inherit', 'primary')}
      onClick={action('clicked')}
    >
      Outlined
    </OutlinedButton>
  </ThemeProvider>
);

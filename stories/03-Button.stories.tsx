/* eslint-disable import/prefer-default-export */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { addWithJSX } from 'storybook-addon-jsx';
import { text } from '@storybook/addon-knobs/react';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  ColoredButton,
  OutlinedButton,
} from '../src/components/Styleguide/Buttons';
import theme from '../static/themes/theme';

storiesOf('Buttons', module)
  .addWithJSX('Colored Button', () => (
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
  ))
  .addWithJSX('Outlined Button', () => (
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
  ));

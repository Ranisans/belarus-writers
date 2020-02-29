import { create } from '@storybook/theming/create';
import icon from '../static/img/favicon-32x32.png';

export default create({
  base: 'culture_portal',

  colorPrimary: '#E8676B',
  colorSecondary: '#EC8588',

  // UI
  appBg: 'white',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E8676B',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#555555',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgba(255, 255, 255, .7)',
  barSelectedColor: '#FFFFFF',
  barBg: '#E8676B',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Storybook of Cultural Portal "Belarus Writers"',
  brandUrl: 'https://belarus-writers.netlify.com/',
});

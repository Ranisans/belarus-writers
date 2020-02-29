import 'storybook-addon-jsx/register';
import '@storybook/addon-knobs/register';

import { addons } from '@storybook/addons';
import theme from './portalLightTheme';

addons.setConfig({
  theme: theme,
});

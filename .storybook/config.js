import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeProvider } from '@material-ui/core/styles';

import { withKnobs } from '@storybook/addon-knobs/react';

import theme from '../static/themes/theme';
addDecorator(withKnobs);
// addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

setAddon(JSXAddon);
const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(req);
}

configure(loadStories, module);

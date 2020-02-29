import { configure, addDecorator } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withKnobs);

const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(req);
}

configure(loadStories, module);

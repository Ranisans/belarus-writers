import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import WorklogComponent from '../src/components/Worklog/Worklog';
import theme from '../static/themes/theme';

export default {
  title: 'Worklog',
  component: WorklogComponent,
};

export const Worklog = () => (
  <ThemeProvider theme={theme}>
    <WorklogComponent />
  </ThemeProvider>
);

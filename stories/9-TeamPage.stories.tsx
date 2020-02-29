import React from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import TeamPageComponent from '../src/pages/team';
import theme from '../static/themes/theme';

export default {
  title: 'Team Page',
  component: TeamPageComponent,
};

export const TeamPage = () => (
  <ThemeProvider theme={theme}>
    <Typography
      variant="h1"
      style={{ margin: 30, textAlign: 'center' }}
      color="primary"
    >
      Members of team
    </Typography>
    <TeamPage />
  </ThemeProvider>
);

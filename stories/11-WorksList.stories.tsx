import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import WorkList from '../src/components/WorksList';
import theme from '../static/themes/theme';
import { Works } from '../src/types';

export default {
  title: 'WorksList',
  component: WorkList,
};

export const BaseWorkList = () => {
  const workList: Works[] = [
    { date: '1981', title: 'Title 1' },
    { date: '1982', title: 'Title 2' },
    { date: '1983', title: 'Title 3' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <WorkList works={workList} />
    </ThemeProvider>
  );
};

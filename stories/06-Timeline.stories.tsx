import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../static/themes/theme';
import Timeline from '../src/components/Timeline/Timeline';

export default {
  title: 'Timeline',
  component: Timeline,
};

const mockTimelineData = [
  {
    title: 'Start',
    description:
      'Start ofthe React cource. There was lesson "React. Webpack" about configuring webpack to work with React',
    date: '2020-02-05',
  },
  {
    title: 'First task',
    description: 'Students had a choice of 2 tasks: singbird and calculator',
    date: '2020-02-05',
  },
  {
    title: 'Deadline first task',
    description: 'Deadline for first task.',
    date: '2020-02-12',
  },
  {
    title: 'Second task',
    description:
      'Cultural portal was the second task. The main idea of task to learn work in groups. We had to develop a web portal about culture of Belarus on the given topic.',
    date: '2020-02-16',
  },
  {
    title: 'Deadline second task',
    description:
      'Deadline for first task. Developing in team is very funny. Unfortunately the end is came up.',
    date: '2020-02-16',
  },
];

export const TimelineComponent = () => (
  <ThemeProvider theme={theme}>
    <Timeline timelineData={mockTimelineData} />
  </ThemeProvider>
);

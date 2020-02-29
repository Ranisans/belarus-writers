/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import VideoComponent from '../src/components/Video';
import theme from '../static/themes/theme';

export default {
  title: 'Video',
  component: VideoComponent,
};

const video = {
  videoURL: 'https://www.youtube.com/embed/I-0ezESiCCw',
  title: 'Иван Мележ: прерванная хроника',
};

export const Video = () => {
  return (
    <ThemeProvider theme={theme}>
      <VideoComponent video={video} />
    </ThemeProvider>
  );
};

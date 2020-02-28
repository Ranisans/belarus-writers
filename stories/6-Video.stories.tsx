/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Video from '../src/components/Video';
import theme from '../static/themes/theme';

const video = {
  videoURL: 'https://www.youtube.com/embed/I-0ezESiCCw',
  title: 'Иван Мележ: прерванная хроника',
};

export const Search = () => {
  return (
    <ThemeProvider theme={theme}>
      <Video video={video} />
    </ThemeProvider>
  );
};

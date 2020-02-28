/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../static/themes/theme';
import Gallery from '../src/components/Gallery/Gallery';
import img1 from '../static/img/ales-2.jpg';
import img2 from '../static/img/Adam_Mickiewicz_by_Józef_Oleszkiewicz.jpg';

export default {
  title: 'Gallery',
  component: Gallery,
};

const mockImages = [
  { alt: img1, image: `/img/${img1}` },
  { alt: img2, image: `/img/${img2}` },
];

const mockAllImages = [
  {
    node: {
      id: 'img1',
      fluid: {
        originalName: img1,
        src: img1,
        base64: '',
        aspectRatio: 0.8,
        srcSet: img1,
        sizes: '(max-width: 450px) 100vw, 450px',
      },
    },
  },
  {
    node: {
      id: 'img2',
      fluid: {
        originalName: img2,
        src: img2,
        base64: '',
        aspectRatio: 0.8,
        srcSet: img2,
        sizes: '(max-width: 450px) 100vw, 450px',
      },
    },
  },
];

export const GalleryComponent = () => (
  <ThemeProvider theme={theme}>
    <Gallery images={mockImages} allImages={mockAllImages} />
  </ThemeProvider>
);

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../static/themes/theme';
import Layout from '../components/Layout';
import { Data } from '../types';
import useGallery from '../components/Gallery/hooks/useGallery';
import Gallery from '../components/Gallery/Gallery';

interface Query {
  data: Data;
}

const TempGalleryPage: React.FC<Query> = () => {
  const images = useGallery();
  console.log('images: ', images);
  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Gallery images={images} />
      </Layout>
    </ThemeProvider>
  );
};

export default TempGalleryPage;



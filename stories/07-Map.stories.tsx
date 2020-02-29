import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import MapComponent from '../src/components/Map';
import theme from '../static/themes/theme';

export default {
  title: 'Map',
  component: MapComponent,
};
const mapData = {
  lat: 51.936076,
  lon: 29.65986,
  title: 'Ivan Melezh Museum',
  description: 'Memorial Museum and a bust',
};

export const Map = () => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        height: '100vh',
      }}
    >
      <MapComponent data={mapData} />
    </div>
  </ThemeProvider>
);

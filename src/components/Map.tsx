import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import MyLocationIcon from '@material-ui/icons/MyLocation';

import { MapData } from '../types';

const TOKEN =
  'pk.eyJ1IjoiZm9tZW5rb2dyZWdvcnkiLCJhIjoiY2s3MGcxaHRhMDFsajNmbnBkazN3Ym5hZyJ9.5imbzt09Cf5HfTb0YQCk2Q';

const useStyles = makeStyles({
  marker: {
    cursor: 'pointer',
    outline: 'none',
  },
  popup: {
    maxWidth: '70%',

    '& h2': {
      margin: '0 0 10px 0',
    },

    '& p': {
      margin: 0,
    },
  },
});

interface MapProps {
  data: MapData;
}

const Map: React.FC<MapProps> = ({
  data: { lat, lon, title, description },
}) => {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    zoom: 16,
    latitude: lat + 0.0007,
    longitude: lon,
  });
  const [showPopup, setShowPopup] = useState(true);
  const styles = useStyles();

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/mapbox/light-v9"
    >
      <Marker latitude={lat} longitude={lon} offsetLeft={-13} offsetTop={5}>
        <div
          className={styles.marker}
          onClick={() => setShowPopup(true)}
          role="button"
          tabIndex={0}
        >
          <MyLocationIcon />
        </div>
      </Marker>
      {showPopup && (
        <Popup
          latitude={lat}
          longitude={lon}
          onClose={() => setShowPopup(false)}
          closeOnClick={false}
          closeButton
          anchor="bottom"
          className={styles.popup}
        >
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Map;

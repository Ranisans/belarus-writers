import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const TOKEN =
  'pk.eyJ1IjoiZm9tZW5rb2dyZWdvcnkiLCJhIjoiY2s3MGcxaHRhMDFsajNmbnBkazN3Ym5hZyJ9.5imbzt09Cf5HfTb0YQCk2Q';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 51.936076,
    longitude: 29.65986,
    zoom: 8,
  });
  const [showPopup, setShowPopup] = useState(false);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/mapbox/light-v9"
    >
      <Marker
        latitude={51.936076}
        longitude={29.65986}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div onClick={() => setShowPopup(true)}>CLICK</div>
      </Marker>
      {showPopup && (
        <Popup
          latitude={51.936076}
          longitude={29.65986}
          closeButton
          closeOnClick
          onClose={() => setShowPopup(false)}
          anchor="top"
        >
          <div>INFO ABOUT AUTHOR PLACE</div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Map;

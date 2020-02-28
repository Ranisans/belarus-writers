import React from 'react';
import { VideoProps } from '../types';

const Video: React.FC<VideoProps> = ({ video: { videoURL, title } }) => {
  return (
    <div className="video">
      <iframe
        width="600px"
        height="335px"
        src={videoURL}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitdata-allowfullscreen="true"
        mozdata-allowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};

export default Video;

import React from 'react';
import { VideoData } from '../../types';

interface VideoProps {
  video: VideoData;
}

const Video: React.FC<VideoProps> = ({ video: { videoURL, title } }) => {
  return (
    <div className="video" style={{ margin: '0 auto' }}>
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

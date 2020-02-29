import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { VideoProps } from '../types';

const useStyles = makeStyles(() => ({
  media: {
    position: 'relative',
    paddingBottom: '56.25%' /* 16:9 */,
    height: '0',
    width: '100%',
  },
  frame: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
}));

const Video: React.FC<VideoProps> = ({ video: { videoURL, title } }) => {
  const classes = useStyles();

  return (
    <div className={classes.media}>
      <iframe
        className={classes.frame}
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

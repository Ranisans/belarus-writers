import React from 'react';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <div>Hello</div>;
  }
  return <div>Loading...</div>;
};

export default IndexPagePreview;

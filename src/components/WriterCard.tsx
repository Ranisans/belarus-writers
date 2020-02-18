import React, { FC } from 'react';

// interface WriterCardProps {}

const WriterCard = ({ edge }: any) => {
  console.log(edge);
  const { fullName, birthData, deathDate, image } = edge.node.frontmatter;

  return (
    <div>
      <div>{fullName}</div>
      <div>{birthData}</div>
      <div>{deathDate}</div>
      <div>{image}</div>
    </div>
  );
};

export default WriterCard;

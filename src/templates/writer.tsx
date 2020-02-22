/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
import { Node } from '../types';

export const dataQl = graphql`
  query ContentFulPost($locale: String) {
    markdownRemark(frontmatter: { language: { eq: $locale } }) {
      frontmatter {
        fullName
        gallery {
          alt
          image
        }
      }
    }
  }
`;

interface DataQlType {
  data: {
    markdownRemark: Node;
  };
}

const Writer = (props: DataQlType) => {
  const { frontmatter: data } = props.data.markdownRemark;
  const { gallery } = props.data.markdownRemark.frontmatter;
  
  return (
    <Layout>
      <div>{data.fullName}</div>
      <Gallery images={gallery} />
    </Layout>
  );
};

export default Writer;

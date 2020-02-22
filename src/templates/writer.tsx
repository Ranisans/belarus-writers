/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { Node } from '../types';

export const dataQl = graphql`
  query ContentFulPost($locale: String) {
    markdownRemark(frontmatter: { language: { eq: $locale } }) {
      frontmatter {
        fullName
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
  return (
    <Layout>
      <div>{data.fullName}</div>
    </Layout>
  );
};

export default Writer;

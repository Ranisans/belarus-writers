/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const dataQl = graphql`
  query ContentFulPost($locale: String) {
    markdownRemark(frontmatter: { language: { eq: $locale } }) {
      frontmatter {
        fullName
      }
    }
  }
`;

interface DataType {
  fullName: string;
}

interface DataQlType {
  data: {
    markdownRemark: {
      frontmatter: DataType;
    };
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

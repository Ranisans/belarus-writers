/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
import { Node } from '../types';
import SEO from '../components/Seo';

export const dataQl = graphql`
  query ContentFulPost($page: String, $locale: String) {
    markdownRemark(
      frontmatter: { language: { eq: $locale }, page: { eq: $page } }
    ) {
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
  const { gallery } = data;

  return (
    <Layout>
      <SEO title={data.fullName} />
      <div>{data.fullName}</div>
      <Gallery images={gallery} />
    </Layout>
  );
};

export default Writer;

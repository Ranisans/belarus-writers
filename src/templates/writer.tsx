/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
import { Node } from '../types';
import SEO from '../components/Seo';
import { GatsbyImageProps } from 'gatsby-image';

declare module 'gatsby-image' {
  export interface GatsbyImageProps {    
      id: string;
  }
}

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
    allImageSharp {
      nodes {
        id
        fluid(sizes: "200") {
          originalName
          src
          srcSet
          tracedSVG
          aspectRatio
          sizes
        }
      }
    }
  }
`;

interface DataQlType {
  data: {
    markdownRemark: Node;
    allImageSharp: {
      nodes: Array<GatsbyImageProps>;
    }
  };
}

const Writer = (props: DataQlType) => {
  const { frontmatter: data } = props.data.markdownRemark;
  const { gallery } = data;
  const allImgsGatsby = props.data.allImageSharp.nodes;

  return (
    <Layout>
      <SEO title={data.fullName} />
      <div>{data.fullName}</div>
      <Gallery images={gallery} allImages={allImgsGatsby}/>
    </Layout>
  );
};

export default Writer;

import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

import { Data, AllMarkdownRemark, Edge, Node, Frontmatter,  } from '../../../types';

interface Query {
  data: Data;
}

const useGallery = () => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery<Query>(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              gallery {
                alt
                image
              }
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges[0].node.frontmatter.gallery;
};

export default useGallery;

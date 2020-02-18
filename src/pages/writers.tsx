import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import WriterCard from '../components/WriterCard';

const Writers = ({ data }: any) => (
  <Layout>
    {data.allMarkdownRemark.edges.map((edge: any) => (
      <WriterCard key={edge} edge={edge} />
    ))}
  </Layout>
);

export default Writers;

export const data = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            fullName
            birthData(formatString: "DD.MM.YYYY")
            deathDate(formatString: "DD.MM.YYYY")
            image
          }
        }
      }
    }
  }
`;

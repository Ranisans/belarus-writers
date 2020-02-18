import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import WriterCard from '../components/WriterCard';

const Writers = ({ data }: any) => (
  <Layout>
    <div>
      {data.allMarkdownRemark.edges.map((edge: any) => {
        return <WriterCard key={edge} edge={edge} />;
      })}
    </div>
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
            birthData(formatString: "DD MMMM, YYYY")
            deathDate(formatString: "DD MMMM, YYYY")
            image
          }
        }
      }
    }
  }
`;

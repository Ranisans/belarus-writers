import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import WriterCard from '../components/WriterCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '50px auto 0 auto',
  },
});

const Writers = ({ data }: any) => {
  const styles = useStyles();

  return (
    <Layout>
      <div className={styles.root}>
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <WriterCard key={edge.node.frontmatter.id} edge={edge} />
        ))}
      </div>
    </Layout>
  );
};

export default Writers;

export const data = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
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

import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import { Data } from '../types';
import { useInput, useFilter } from '../hooks';

import Layout from '../components/Layout';
import WriterCard from '../components/WriterCard';
import Search from '../components/Search';

const useStyles = makeStyles({
  root: { maxWidth: '1200px', margin: '0 auto' },
  header: {},
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px 0',
  },
});

interface WritersProps {
  data: Data;
}

const Writers: React.FC<WritersProps> = ({ data }) => {
  const initEdges = data.allMarkdownRemark.edges;
  const [query, handleChange] = useInput();
  const [edges, handleSumbit] = useFilter(initEdges, query);
  const styles = useStyles();

  return (
    <Layout>
      <div className={styles.root}>
        <h2 className={styles.header}>Projects</h2>
        <Search
          query={query}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
        />
        <div className={styles.projects}>
          {edges.length === 0 ? (
            <div>nothing found</div>
          ) : (
            edges.map(edge => (
              <WriterCard key={edge.node.frontmatter.id} edge={edge} />
            ))
          )}
        </div>
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
            placeOfBirth
            image
          }
        }
      }
    }
  }
`;

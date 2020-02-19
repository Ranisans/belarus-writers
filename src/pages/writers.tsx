import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

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

const Search = ({ query, handleChange, handleSumbit }) => {
  return (
    <form onSubmit={handleSumbit}>
      <Input type="search" value={query} onChange={handleChange} />
    </form>
  );
};

const useInput = () => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput((e.target as HTMLInputElement).value);
  };

  return [input, handleChange];
};

const useFilter = (initEdges, query) => {
  const [edges, setEdges] = useState(initEdges);

  const handleSumbit = e => {
    e.preventDefault();
    setEdges(
      initEdges.filter(
        edge =>
          edge.node.frontmatter.fullName.match(new RegExp(query, 'i')) ||
          edge.node.frontmatter.placeOfBirth.match(new RegExp(query, 'i'))
      )
    );
  };

  return [edges, handleSumbit];
};

const Writers = ({ data }: any) => {
  const initEdges = data.allMarkdownRemark.edges;
  const [query, handleChange] = useInput();
  const [edges, handleSumbit] = useFilter(initEdges, query);
  const styles = useStyles();

  return (
    <Layout>
      <div>
        <h2>Projects</h2>
        <Search
          query={query}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
        />
        <div className={styles.root}>
          {edges.length === 0 ? (
            <div>nothing found</div>
          ) : (
            edges.map((edge: any) => (
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

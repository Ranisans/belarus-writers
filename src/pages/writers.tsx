import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useIntl } from 'gatsby-plugin-intl';
import theme from '../../static/themes/theme';

import { Data } from '../types';
import useSearch from '../hooks';
import tabs from '../data/tabsName';

import Layout from '../components/Layout';
import WriterCard from '../components/WriterCard';
import Search from '../components/Search';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  header: {
    margin: `${theme.spacing(5)} 0`,
    fontFamily: theme.typography.fontFamily,
    fontSize: '4rem',
    textAlign: 'center',

    '@media (max-width: 560px)': {
      fontSize: '3rem',
    },
  },
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: `${theme.spacing(5)} 0`,
  },
  error: {
    fontSize: '1.5rem',
  },
});

interface WritersProps {
  data: Data;
}

const Writers: React.FC<WritersProps> = ({ data }) => {
  const initEdges = data.allMarkdownRemark.edges;
  const [query, edges, handleChange] = useSearch(initEdges);
  const styles = useStyles();
  const intl = useIntl();
  const [header, error] = [
    intl.formatMessage({ id: 'writers.header' }),
    intl.formatMessage({ id: 'writers.error' }),
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <Layout tabIndex={tabs.list}>
        <div className={styles.root}>
          <Typography variant="h2" className={styles.header}>
            {header}
          </Typography>
          <Search query={query} handleChange={handleChange} />
          <div className={styles.projects}>
            {edges.length === 0 ? (
              <div className={styles.error}>{error}</div>
            ) : (
              edges.map(edge => (
                <WriterCard key={edge.node.frontmatter.fullName} edge={edge} />
              ))
            )}
          </div>
        </div>
      </Layout>
    </MuiThemeProvider>
  );
};

export default Writers;

export const data = graphql`
  query WritersPage($locale: String) {
    allMarkdownRemark(filter: { frontmatter: { language: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            page
            fullName
            birthDate(formatString: "DD.MM.YYYY")
            deathDate(formatString: "DD.MM.YYYY")
            placeOfBirth
            image
          }
        }
      }
    }
  }
`;

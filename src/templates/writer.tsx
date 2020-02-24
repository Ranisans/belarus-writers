/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
import { Node, ImgNode } from '../types';
import SEO from '../components/Seo';
import theme from '../../static/themes/theme';

interface DataQlType {
  data: {
    markdownRemark: Node;
    allImageSharp: {
      edges: Array<ImgNode>;
    }
  };
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
      edges {
        node {
          fluid(srcSetBreakpoints: [400, 320], maxWidth: 540, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => {
  return createStyles({
    pageContainer: {
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        '& div': {
          maxWidth: '100%',
        }
      },
    },
  });
});

const Writer = (props: DataQlType) => {
  const classes = useStyles(theme);

  const { frontmatter: data } = props.data.markdownRemark;
  const { gallery } = data;
  const allImgsGatsby = props.data.allImageSharp.edges;

  return (
    <Layout>
      <SEO title={data.fullName} />
      <Grid container spacing={3} className={classes.pageContainer}>
        <Grid item xs={6}>
          <div>{data.fullName}</div>
        </Grid>
        <Grid item xs={6}>
          <Gallery images={gallery} allImages={allImgsGatsby}/>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Writer;

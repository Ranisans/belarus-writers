/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
import Timeline from '../components/Timeline/Timeline';
import { Node, ImgNode } from '../types';
import SEO from '../components/Seo';
import theme from '../../static/themes/theme';
import tabs from '../constants/tabsName';

interface DataQlType {
  data: {
    markdownRemark: Node;
    allImageSharp: {
      edges: Array<ImgNode>;
    };
  };
}

const useStyles = makeStyles(thisTheme => {
  return createStyles({
    primaryContainer: {
      justifyContent: 'space-between',
      [thisTheme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        '& div': {
          maxWidth: '100%',
        },
      },
      height: '100vh',
    },
    pageCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
});

const getDate = (str: string, language: string) => {
  const date = Date.parse(str);
  const date1 = new Date(date);
  const lang = language === 'by' ? 'ru' : language;
  const formatter = new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  return formatter.format(date1);
};

const Writer = (props: DataQlType) => {
  const classes = useStyles(theme);

  const { frontmatter: data } = props.data.markdownRemark;
  const { fullName, gallery, language, birthDate, deathDate, timeline } = data;
  const allImgsGatsby = props.data.allImageSharp.edges;

  return (
    <Layout tabIndex={tabs.list}>
      <SEO title={data.fullName} />
      <Grid container spacing={3} className={classes.primaryContainer}>
        <Grid item xs={6} className={classes.pageCenter}>
          <Typography variant="h1">{fullName}</Typography>
          <Typography variant="body1">
            {`${getDate(birthDate, language)} - ${getDate(
              deathDate,
              language
            )}`}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.pageCenter}>
          <Gallery images={gallery} allImages={allImgsGatsby} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Timeline timelineData={timeline} />
      </Grid>
    </Layout>
  );
};
export default Writer;

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
        birthDate
        deathDate
        language
        works {
          date
          title
        }
        timeline {
          dateEnd
          dateStart
          description
          title
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          fluid(srcSetBreakpoints: [400, 320], maxWidth: 540, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`;

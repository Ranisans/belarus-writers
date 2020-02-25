/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery/Gallery';
import Timeline from '../components/Timeline/Timeline';
import Map from '../components/Map';
import WorksList from '../components/WorksList';

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

const useStyles = makeStyles({
  centurion: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    padding: '100px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  bottomSpace: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 80,
  },
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
  const {
    fullName,
    gallery,
    language,
    birthDate,
    deathDate,
    timeline,
    works,
    map,
  } = data;
  const allImgsGatsby = props.data.allImageSharp.edges;
  return (
    <Layout tabIndex={tabs.styleGuide}>
      <SEO title={data.fullName} />
      <Container component="div" className={classes.centurion}>
        <Container component="div" className={classes.primaryContainer}>
          <Container component="div" className={classes.centurion}>
            <Typography variant="h1">{fullName}</Typography>
            <Typography variant="body1" style={{ marginBottom: 50 }}>
              {`${getDate(birthDate, language)} - ${getDate(
                deathDate,
                language
              )}`}
            </Typography>
            <WorksList works={works} />
          </Container>
          <Container component="div">
            <Gallery images={gallery} allImages={allImgsGatsby} />
          </Container>
        </Container>
        <Timeline timelineData={timeline} />
        <Container component="div" className={classes.bottomSpace}>
          {map.map(mapItem => {
            return <Map data={mapItem} key={mapItem.title} />;
          })}
        </Container>
      </Container>
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
        map {
          description
          lat
          lon
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
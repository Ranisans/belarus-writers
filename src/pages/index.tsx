import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import theme from '../../static/themes/theme';
import Layout from '../components/Layout';
import {Edge} from '../types';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    padding: '5px',

    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: '1',
    '@media (max-width: 780px)': {
      padding: '20px',
    },
    boxSizing: 'border-box',
  },

  '@keyframes blinker': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  title: {
    textDecoration: 'uppercase',
    textAlign: 'center',
    '@media (max-width: 780px)': {
      margin: '0',
    },
  },

  paragraph: {
    margin: '0',
    padding: '0',
    textIndent: '1.5em',
    textAlign: 'justify',
  },

  columnWrapper: {
    maxWidth: '400px',
    padding: '15px',
  },

  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },

  author: {
    marginTop: '15px',
    textDecoration: 'uppercase',
    fontSize: '2rem',
    textAlign: 'center',
  },

  data: {
    margin:'0',
    fontSize: '1.5rem',
  },

  btn: {
    position: 'relative',
    fontFamily: theme.typography.fontFamily,
    marginTop: '0.5rem',
    padding: '8px 40px',
    fontSize: '1rem',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.secondary.contrastText,
    '@media (max-width: 780px)': {
      padding: '3px 20px',
    },

    '&:hover': {
      border: `2px solid ${theme.palette.secondary.contrastText}`,
      color: theme.palette.primary.main,
      transition: '0.3s',
    },
  }
});

function getRandomIndex():number {
  return Math.floor(Math.random() * 12) + 1;
}


const Index = () => {
  const information = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
              fullName
              birthData(formatString: "YYYY")
              deathDate(formatString: "YYYY")
              image
            }
          }
        }
      }
    }
  `);

  const data = information.allMarkdownRemark.edges;

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <h1 className={classes.title}>Writers of Belarus</h1>
        <div className={classes.container}>
          <div className={classes.columnWrapper}>
            <Typography className={classes.paragraph}>
              The end of 19th and especially at the beginning of the 20th
              century marked the development of Belarusian literature as a
              completely separate entity that used the modern version of the
              Belarusian language. Many famous works in a completely different
              light and also shows the unique values that Belarusian literature
              of the period has to offer to the reader from the free world.
            </Typography>
            <Typography className={classes.paragraph}>
              Modern literary life is centred in Minsk. The Logvinau publishing
              house came into existence in 2014 as a private initiative of some
              Belarusian publishers and authors and aims to promote Belarusian
              literature and make it more widely known.
            </Typography>
          </div>
          {
            data.map((edge: Edge) => (
              (edge.node.frontmatter.id === 12) ? (
                <div className={classes.columnWrapper} key={edge.node.frontmatter.id}>
                  <div>
                    <img
                      className={classes.image}
                      src={edge.node.frontmatter.image}
                      alt={edge.node.frontmatter.fullName}
                  />
                  </div>
                  <div className={classes.descriptionWrapper}>
                    <Typography className={classes.author}>
                      {edge.node.frontmatter.fullName}
                    </Typography>
                    <Typography className={classes.data}>
                      {edge.node.frontmatter.birthData} - {edge.node.frontmatter.deathDate}
                    </Typography>
                    <Button className={classes.btn} href="#">Read more ...</Button>
                  </div>
                </div> 
              ) : null
              ))
          }
        </div>
      </Layout>
    </MuiThemeProvider>
  );
  
};

export default Index;

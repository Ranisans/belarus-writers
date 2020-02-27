import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useIntl } from 'gatsby-plugin-intl';

import theme from '../../static/themes/theme';
import Layout from '../components/Layout';
import tabs from '../constants/tabsName';

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
    maxHeight: 'auto',
  },

  author: {
    marginTop: '15px',
    textDecoration: 'uppercase',
    fontSize: '2rem',
    textAlign: 'center',
  },

  data: {
    margin: '0',
    fontSize: '1.75rem',
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
  },
});

const Index = () => {
  const information = useStaticQuery(graphql`
    query($locale: String) {
      markdownRemark(frontmatter: { language: { eq: $locale } }) {
        frontmatter {
          fullName
          birthDate(formatString: "YYYY")
          deathDate(formatString: "YYYY")
          image
        }
      }
    }
  `);

  const data = information.markdownRemark.frontmatter;
  const intl = useIntl();
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Layout tabIndex={tabs.index}>
        <h1 className={classes.title}>
          {intl.formatMessage({ id: 'indexPageText.title' })}
        </h1>
        <div className={classes.container}>
          <div className={classes.columnWrapper}>
            <Typography className={classes.paragraph}>
              {intl.formatMessage({ id: 'indexPageText.partOne' })}
            </Typography>
            <Typography className={classes.paragraph}>
              {intl.formatMessage({ id: 'indexPageText.partTwo' })}
            </Typography>
          </div>
          <div className={classes.columnWrapper}>
            <div>
              <img
                className={classes.image}
                src={data.image}
                alt={data.fullName}
              />
            </div>
            <div className={classes.descriptionWrapper}>
              <Typography className={classes.author}>
                {data.fullName}
              </Typography>
              <Typography className={classes.data}>
                {data.deathDate !== null
                  ? `${data.birthDate} - ${data.deathDate}`
                  : `${data.deathDate} - `}
              </Typography>
              <Button className={classes.btn}>
                {intl.formatMessage({ id: 'indexPageText.buttonText' })}
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </MuiThemeProvider>
  );
};

export default Index;

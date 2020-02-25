import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import theme from '../../static/themes/theme';
import Layout from '../components/Layout';
import {Edge} from '../types';
import tabs from '../constants/tabsName';

import Map from '../components/Map';

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
    margin:'0',
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
  }
});

function getRandomIndex():number {
  return Math.floor(Math.random() * 12) + 1;
}

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

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Layout tabIndex={tabs.index}>
        <h1 className={classes.title}>Писатели Беларуси</h1>
        <div className={classes.container}>
          <div className={classes.columnWrapper}>
            <Typography className={classes.paragraph}>
              Конец 19-го и особенно начало 20-го века ознаменовали развитие белорусской литературы как совершенно 
              отдельного субъекта, в котором использовалась современная версия белорусского языка. Многие известные 
              работы в совершенно ином свете, а также демонстрируют уникальные ценности, которые белорусская 
              литература того времени может предложить читателю из свободного мира. 
            </Typography>
            <Typography className={classes.paragraph}>
              Современная литературная жизнь сосредоточена в Минске. Издательский дом, который возник в 2014 году
              как частная инициатива некоторых белорусских издателей и авторов, направлен на популяризацию 
              белорусской литературы и ее широкое распространение.
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
                {`${data.birthDate} - ${data.deathDate}`}
              </Typography>
              <Button className={classes.btn}>Read more</Button>
            </div>
          </div>
        </div>
      </Layout>
    </MuiThemeProvider>
  );
  
};

export default Index;
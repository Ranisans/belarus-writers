import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import theme from '../../static/themes/theme';

import Layout from '../components/Layout';

const useStyles = makeStyles(({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
    paddingBottom: '10px',
  },
  '@keyframes blinker': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  paragraph: {
    margin: '0',
    padding: '0',
    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'easy-out',
    animationIterationCount: '1',
    gridColumnEnd: 'span 12',
  },
  imageWrapper: {
    gridColumnEnd: 'span 8',
  },
  descriptionWrapper: {
    gridColumnEnd: 'span 4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },

  btn: {
    fontFamily: theme.typography.fontFamily,
    padding: '8px 40px',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.secondary.contrastText,
  }
}));

/* import { TimelineModel } from '../models/timelineModel';
import Timeline from "../components/Timeline/Timeline"; */

/* const timelineData: TimelineModel[] = [
  {
    date: '12 февраля 1956 г.',
    description: 'Родился в г. Чаусы, Могилевская обл. в семье служащих',
  },
  {
    date: '1972',
    title: 'Школа',
    description: 'Окончил Чаусскую СШ № 1 с золотой медалью',
  },
  {
    date: '1982',
    description:
      'Окончил Литературный институт (семинар В. И. Амлинского).' +
      'Получил специальность по диплому «литературный работник»',
  },
  {
    date: '1972 - 1976',
    description:
      'Переехав в Минск, работал на авторемонтном заводе слесарем и ' +
      'учился на вечернем отделении политехнического института (не завершив учёбу)',
  },
  {
    date: '1973 - 1975',
    title: 'Армия',
    description: 'Призван на срочную службу в пограничные войска',
  },
]; */


const Index = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        {/*<Timeline timelineData={timelineData} /> */}
        <h1>HEADING</h1>
        <div className={classes.container}>
          <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>
          <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>
          <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>
          <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>
          <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>
          <Typography className={classes.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Typography>

          <div className={classes.imageWrapper}>
            <img className={classes.image} src="https://www.belta.by/images/storage/news/with_archive/2017/000027_1505460396_big.jpg" alt="writer" />
          </div>
          <div className={classes.descriptionWrapper}>
            <Typography>Maksim Tank</Typography>
            <Typography>1920-1999</Typography>
            <Button className={classes.btn}>More ...</Button>
          </div>
        </div>
      </Layout>
    </MuiThemeProvider>
  );
  
};

export default Index;

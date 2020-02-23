import React from 'react';
import worklogData from '../../data/worklog';
import { Container, Grid } from '@material-ui/core';
import Legend from './Legend';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles({
  root: {
    padding: '2rem !important',
    '&:nth-child(odd)': {
      position: 'relative',
      '&::before': {
        content: `''`,
        position: 'absolute',
        left: '-4000px',
        right: '-4000px',
        top: '0',
        bottom: '0',
        background: '#e6e6e6',
          zIndex: 1
      },
    },
  },
  chartWrapper: {
    '@media (min-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  chart: {
    maxWidth: '280px',
    margin: '0 auto',

    '@media (min-width: 768px)': {
      flex: '0 0 230px',
      maxWidth: '230px',

      margin: '0 40px 0 0',
    },
  },
});

const Worklog = () => {
  const styles = useStyles();
  const charts = worklogData.map((item, index) => {
    const title = item.name;
    const label: string[] = [];
    const data: number[] = [];

    item.worklog.map(log => {
      label.push(log.title);
      data.push(log.hours);
    });

    return (
      <div className={styles.root}>
          <div style={{position: 'relative', zIndex: 100}}>
              <h3>{title}</h3>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                      <div className={styles.chartWrapper}>
                          <div className={styles.chart}>
                              <Chart title={title} label={label} data={data} key={index} />
                          </div>
                          <Legend labels={label} />
                      </div>
                  </Grid>
              </Grid>
          </div>

      </div>
    );
  });

  return <>{charts}</>;
};

export default Worklog;

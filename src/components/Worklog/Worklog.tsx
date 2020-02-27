import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import worklogData from '../../data/worklog';
import Legend from './Legend';
import Chart from './Chart';

const useStyles = makeStyles({
  root: {
    '@media (min-width: 980px)': {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  chartOuter: {
    '@media (min-width: 980px)': {
      flex: '0 0 50%',
      maxWidth: '50%',
      marginBottom: '30px',
    },
    padding: '1rem !important',
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
        zIndex: 1,

        '@media (min-width: 980px)': {
          content: 'none',
        },
      },
    },
  },
  chartWrapper: {
    position: 'relative',
    zIndex: 100,
  },
  h3: {
    margin: '0 0 1rem',
  },
  chartInner: {
    '@media (min-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
    },

    '@media (min-width: 980px)': {
      alignItems: 'flex-start',
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

    item.worklog.forEach(log => {
      label.push(log.title);
      data.push(log.hours);
    });

    return (
      <div className={styles.chartOuter} key={index.toString()}>
        <div className={styles.chartWrapper}>
          <h3 className={styles.h3}>{title}</h3>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={styles.chartInner}>
                <div className={styles.chart}>
                  <Chart label={label} data={data} />
                </div>
                <Legend labels={label} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  });

  return <div className={styles.root}>{charts}</div>;
};

export default Worklog;

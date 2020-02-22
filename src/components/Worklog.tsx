import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import worklogData from '../data/worklog';
import {Grid} from "@material-ui/core";

const Chart = props => {
  const data = {
    labels: props.label,
      tooltip: {
          "custom": (tooltipModel) => {
              return '44444';
              },
          callbacks: {
              label: function(tooltipItem, data) {
                  debugger;
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';

                  if (label) {
                      label += ': ';
                  }
                  label += Math.round(tooltipItem.yLabel * 100) / 100;
                  return label + '.......';
              }
          }
      },
    datasets: [
      {
        data: props.data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#ba68c8',
          '#7cb342',
          '#795548',
          '#ff7043',
        ],
      },
    ],
  };

  const legend = {
    position: 'bottom',
      tooltip: {
          callbacks: {
              label: function(tooltipItem, data) {
                  debugger;
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';

                  if (label) {
                      label += ': ';
                  }
                  label += Math.round(tooltipItem.yLabel * 100) / 100;
                  return label + '.......';
              }
          }
      },
    align: 'start',
    fullWidth: true,
      labels: {
      boxWidth: 15,
    },
    // generateLabels: {
    //   lineWidth: 100
    // },
      generateLabels() {
      return {
          lineWidth: 100
      }
      }

  };

  const options = {

    responsive: false,
    layout: {
      padding: 0,
    },
      title: {
          display: true,
          text: props.title,
          fontSize: '24',
          fontFamily: 'GFS Didot'
      },
      tooltip: {
          callbacks: {
              label: function(tooltipItem, data) {
                debugger;
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';

                  if (label) {
                      label += ': ';
                  }
                  label += Math.round(tooltipItem.yLabel * 100) / 100;
                  return label + '.......';
              }
          }
      }
  };

  return (
    <Grid item xs={12} sm={6} className={'item'}>
      <Doughnut
        options={options}
        height={300}
        data={data}
        legend={legend}
      />
    </Grid>
  );
};

const Worklog = () => {
  const charts = worklogData.map((item, index) => {
    const title = item.name;
    const label:string[] = [];
    const data: number[] = [];

    item.worklog.map(log => {
      label.push(log.title);
      data.push(log.hours);
    });

    return <Chart title={title} label={label} data={data} key={index} />;
  });

    return <Grid container spacing={3}>{charts}</Grid>;
};

export default Worklog;

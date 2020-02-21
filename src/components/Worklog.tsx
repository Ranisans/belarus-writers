import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import worklogData from '../data/worklog';

const Chart = props => {
  const data = {
    labels: props.label,
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
    position: 'right',
    fullWidth: false,
  };

  const options = {
    responsive: false,
    layout: {
      padding: 0,
    },
  };

  return (
    <div className={'item'}>
      <h1>{props.title}</h1>
      <Doughnut
        options={options}
        height={350}
        width={550}
        data={data}
        legend={legend}
      />
    </div>
  );
};

const Worklog = () => {
  const charts = worklogData.map(item => {
    const title = item.name;
    const label = [];
    const data = [];

    item.worklog.map(log => {
      label.push(log.title);
      data.push(log.hours);
    });

    return <Chart title={title} label={label} data={data} />;
  });

  return <>{charts}</>;
};

export default Worklog;

import React from 'react';
import {
  ChartData,
  ChartLegendOptions,
  ChartOptions,
  ChartTooltipItem,
} from 'chart.js';
import backgroundColors from './consts';
import { Doughnut } from 'react-chartjs-2';

interface ChartProps {
  label: string[];
  title: string;
  data: number[];
}

const Chart = (props: ChartProps) => {
  const data: ChartData = {
    labels: props.label,
    datasets: [
      {
        data: props.data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const legend: ChartLegendOptions = {
    display: false,
  };

  const options: ChartOptions = {
    responsive: true,
    layout: {
      padding: 0,
    },
    title: {
      // display: true,
      text: props.title,
      fontSize: 19,
      fontFamily: 'PTSans, Helvetica, Arial, sans-serif',
    },
    tooltips: {
      callbacks: {
        label(tooltipItem: ChartTooltipItem, data: ChartData): string {
          const index = tooltipItem.index;
          const title = data.labels[index];
          const value = data.datasets[0].data[index];
          const h = value === 1 ? 'hour' : 'hours';
          return `${title}: ${value} ${h}`;
        },
      },
    },
  };

  return (
    <Doughnut
      options={options}
      width={280}
      height={280}
      data={data}
      legend={legend}
    />
  );
};

export default Chart;

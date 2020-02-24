import React from 'react';
import {
    ChartData,
    ChartLegendOptions,
    ChartOptions,
     ChartTooltipModel,
} from 'chart.js';
import backgroundColors from './consts';
import { Doughnut } from 'react-chartjs-2';

interface ChartProps {
  label: string[];
  data: number[];
}

function customTooltips(tooltipModel: ChartTooltipModel) {
    const tooltipId = 'chartjs-tooltip';
    let tooltipEl = document.getElementById(tooltipId);

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = tooltipId;
        document.body.appendChild(tooltipEl);
    }

    if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = '0';
        return;
    }

    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    const tooltipData = tooltipModel.body[0].lines[0].split(':');
    const h = tooltipData[1] === '1' ? 'hour' : 'hours';
    const tooltip = `${tooltipData[0]}: ${tooltipData[1]}&nbsp;${h}`;
    tooltipEl.innerHTML = tooltip;

    const position = this._chart.canvas.getBoundingClientRect();

    tooltipEl.style.opacity = '1';
    tooltipEl.style.zIndex = '999';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.backgroundColor = tooltipModel.backgroundColor;
    tooltipEl.style.color = tooltipModel.bodyFontColor;
    tooltipEl.style.borderRadius = tooltipModel.cornerRadius + 'px';
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
      tooltips: {
          enabled: false,
          custom: customTooltips,
      }
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

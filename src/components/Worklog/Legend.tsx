import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundColors from './consts';

interface LegendProps {
  labels: string[];
}

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    fontSize: '14px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'baseline',
    marginTop: '7px',
  },
  marker: {
    width: '20px',
    height: '15px',
    flex: '0 0 20px',
    marginRight: '10px',
    position: 'relative',
    top: '3px',
  },
});

const Legend = (props: LegendProps) => {
  const styles = useStyles();

  const { labels } = props;
  const legendList = labels.map((label: string, index: number) => {
    return (
      <li className={styles.legendItem} key={index.toString()}>
        <span
          className={styles.marker}
          style={{ backgroundColor: backgroundColors[index] }}
        />
        <span>{label}</span>
      </li>
    );
  });
  return <ul className={styles.root}>{legendList}</ul>;
};

export default Legend;

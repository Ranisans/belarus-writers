import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import evaluation from '../data/evaluation';
import { EvaluationModel, EvaluationTaskModel } from '../types';

const useStyles = makeStyles({
  label: {},
  checkbox: {
    alignSelf: 'start',
  },
});

const getLabel = (task: EvaluationTaskModel) => {
  return (
    <>
      <b>{`${task.upTo ? 'up to' : ''} ${task.score}`}</b>
      {`: ${task.title}`}
    </>
  );
};

const getTasks = (tasks: EvaluationTaskModel[]) => {
  const styles = useStyles();
  let score = 0;
  const elems: JSX.Element[] = [];

  tasks.forEach((task: EvaluationTaskModel, index: number) => {
    if (task.done) {
      score += task.score;
    }

    const label = getLabel(task);

    elems.push(
      <div key={index.toString()}>
        <FormControlLabel
          control={
            <Checkbox
              checked={task.done}
              color="primary"
              className={styles.checkbox}
            />
          }
          label={label}
        />
      </div>
    );
  });

  return {
    score,
    elems,
  };
};

const Evaluation = () => {
  let score = 0;

  const sections = evaluation.map((section: EvaluationModel, index: number) => {
    const tasks = getTasks(section.tasks);

    score += tasks.score;

    return (
      <section key={index.toString()}>
        <h3>{section.title}</h3>
        {tasks.elems}
      </section>
    );
  });

  return (
    <>
      {sections}
      <Typography variant="h4" gutterBottom>
        {`Total score: ${score}`}
      </Typography>
    </>
  );
};

export default Evaluation;

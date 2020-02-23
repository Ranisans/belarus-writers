import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import evaluation from '../data/evaluation';
import { EvaluationModel, EvaluationTaskModel } from '../models/evaluation';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {},
  checkbox: {
    alignSelf: 'start'
  },
});

const getTasks = (tasks: EvaluationTaskModel[]) => {
  const styles = useStyles();
  let score = 0;
  let elems: JSX.Element[] = [];

  tasks.map((task: EvaluationTaskModel) => {
    if (task.done) {
      score += task.score;
    }
    elems.push(
      <div>
        <FormControlLabel
          control={<Checkbox checked={task.done} color="primary" className={styles.checkbox} />}
          label={task.title}
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

  const sections = evaluation.map((section: EvaluationModel) => {
    const tasks = getTasks(section.tasks);

    score += tasks.score;

    return (
      <section>
        <h3>{section.title}</h3>
        {tasks.elems}
      </section>
    );
  });

  return (
    <>
      {sections}
      <Typography variant="h4" gutterBottom>
        Total score: {score}
      </Typography>
    </>
  );
};

export default Evaluation;

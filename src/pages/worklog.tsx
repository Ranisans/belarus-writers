import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import WorkLog from '../components/Worklog/Worklog';
import Evaluation from '../components/Evaluation';
import tabs from '../data/tabsName';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
});

const WorkLogPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Layout tabIndex={tabs.workLog}>
        <CssBaseline />
        <Container maxWidth="lg">
          <section>
            <Typography variant="h1">WorkLog</Typography>
            <WorkLog />
          </section>
          <section>
            <h2>Difficulties </h2>
            <ul>
              <li>Main 1-3 difficulties for the team during implementation</li>
              <li>Main 1-3 difficulties for the team during implementation</li>
              <li>Main 1-3 difficulties for the team during implementation</li>
            </ul>
          </section>
          <section>
            <h2>Self-evaluation</h2>
            <Evaluation />
          </section>
        </Container>
      </Layout>
    </div>
  );
};

export default WorkLogPage;

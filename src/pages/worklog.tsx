import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import Layout from '../components/Layout';
import WorkLog from '../components/Worklog/Worklog';
import Evaluation from '../components/Evaluation';
import tabs from '../constants/tabsName';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  section: {
    margin: '50px 0',
    // borderTop: '1px solid #ccc'
  },
});

const WorkLogPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Layout tabIndex={tabs.workLog}>
        <CssBaseline />
        <section className={styles.section}>
          <h1>WorkLog</h1>
          <WorkLog />
        </section>
        <section className={styles.section}>
          <Container maxWidth="lg">
            <h2>Difficulties </h2>
            <ul>
              <li>Main 1-3 difficulties for the team during implementation</li>
              <li>Main 1-3 difficulties for the team during implementation</li>
              <li>Main 1-3 difficulties for the team during implementation</li>
            </ul>
          </Container>
        </section>
        <section className={styles.section}>
          <Container maxWidth="lg">
            <h2>Self-evaluation</h2>
            <Evaluation />
          </Container>
        </section>
      </Layout>
    </div>
  );
};

export default WorkLogPage;

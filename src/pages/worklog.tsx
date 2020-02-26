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
    // borderTop: '1px solid #ccc'
  },
});

const WorkLogPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Layout tabIndex={tabs.workLog}>
        <CssBaseline />
        <Container maxWidth="lg">
          <section className={styles.section}>
            <h1>WorkLog</h1>
            <WorkLog />
          </section>
          <section className={styles.section}>
            <h2>Difficulties </h2>
            <ul>
              <li>Main 1-3 difficulties for the team during implementation</li>
              <li>Main 1-3 difficulties for the team during implementation</li>
              <li>Main 1-3 difficulties for the team during implementation</li>
            </ul>
          </section>
          <section className={styles.section}>
            <h2>Self-evaluation</h2>
            <Evaluation />
          </section>
        </Container>
      </Layout>
    </div>
  );
};

export default WorkLogPage;

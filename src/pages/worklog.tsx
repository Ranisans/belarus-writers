import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import Layout from '../components/Layout';
import theme from '../../static/themes/theme';
import Worklog from '../components/Worklog/Worklog';
import Evaluation from '../components/Evaluation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  section: {
    margin: '50px 0',
    // borderTop: '1px solid #ccc'
  },
});

const WorklogPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <section className={styles.section}>
            <h1>Worklog</h1>
            <Worklog />
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
      </ThemeProvider>
    </div>
  );
};

export default WorklogPage;

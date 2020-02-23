import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import Layout from '../components/Layout';
import theme from '../../static/themes/theme';
import Worklog from '../components/Worklog/Worklog';
import Evaluation from '../components/Evaluation';

const WorklogPage = () => {
  return (
      <div style={{overflow: 'hidden'}}>
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
            <section style={{margin: '50px 0'}}>
                <h1>Worklog</h1>
                <Worklog />
            </section>
            <section style={{margin: '50px 0', borderTop: '1px solid #ccc'}}>
                <Container maxWidth="lg">
                    <h2>Difficulties </h2>
                </Container>
            </section>
            <section style={{margin: '50px 0', borderTop: '1px solid #ccc'}}>
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

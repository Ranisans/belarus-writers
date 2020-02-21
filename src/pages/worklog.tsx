import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import Layout from '../components/Layout';
import theme from '../../static/themes/theme';
import Worklog from '../components/Worklog';

const WorklogPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Container maxWidth="lg">
          <h1>Worklog</h1>
          <Worklog />
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default WorklogPage;

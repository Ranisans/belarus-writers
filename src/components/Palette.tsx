import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container, Box } from '@material-ui/core';

import theme from '../../static/themes/theme';

interface PropType {
  title: string;
  item1: string[];
  item2: string[];
  item3: string[];
}

interface PaletteType {
  item: string[];
}

const useStyles = makeStyles(() =>
  createStyles({
    palette: {
      margin: 0,
    },
    paletteItem: {
      maxWidth: '100%',
    },
    box: {
      width: '5rem',
      height: '5rem',
    },
  })
);

const PaletteItem = ({ item }: PaletteType) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} className={classes.paletteItem}>
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item>
          <Box boxShadow={3} bgcolor={item[0]} m={1} className={classes.box} />
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.palette}>
            {item[1]}
          </Typography>
          <Typography variant="body2">{item[2]}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Row = ({ title, item1, item2, item3 }: PropType) => {
  return (
    <>
      <Grid container>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid container spacing={2}>
        <PaletteItem item={item1} />
        <PaletteItem item={item2} />
        <PaletteItem item={item3} />
      </Grid>
    </>
  );
};

const Palette = () => {
  const colors = theme;
  return (
    <Container maxWidth="lg">
      <Grid container wrap="wrap">
        <Row
          title="Primary"
          item1={[
            'primary.light',
            'palette.primary.light',
            colors.palette.primary.light,
          ]}
          item2={[
            'primary.main',
            'palette.primary.main',
            colors.palette.primary.main,
          ]}
          item3={[
            'primary.dark',
            'palette.primary.dark',
            colors.palette.primary.dark,
          ]}
        />
        <Row
          title="Secondary"
          item1={[
            'secondary.light',
            'secondary.light',
            colors.palette.secondary.light,
          ]}
          item2={[
            'secondary.main',
            'secondary.main',
            colors.palette.secondary.main,
          ]}
          item3={[
            'secondary.dark',
            'secondary.dark',
            colors.palette.secondary.dark,
          ]}
        />
        <Row
          title="Text and background"
          item1={['text.primary', 'text.primary', colors.palette.text.primary]}
          item2={[
            'text.secondary',
            'text.secondary',
            colors.palette.text.secondary,
          ]}
          item3={[
            'background.default',
            'background.primary.default',
            colors.palette.background.default,
          ]}
        />
      </Grid>
      <Row
        title="Error"
        item1={['error.light', 'error.light', colors.palette.error.light]}
        item2={['error.main', 'error.main', colors.palette.error.main]}
        item3={['error.dark', 'error.dark', colors.palette.error.dark]}
      />
      <Row
        title="Warning"
        item1={['warning.light', 'warning.light', colors.palette.warning.light]}
        item2={['warning.main', 'warning.main', colors.palette.warning.main]}
        item3={['warning.dark', 'warning.dark', colors.palette.warning.dark]}
      />
      <Row
        title="Info"
        item1={['info.light', 'info.light', colors.palette.info.light]}
        item2={['info.main', 'info.main', colors.palette.info.main]}
        item3={['info.dark', 'info.dark', colors.palette.info.dark]}
      />
      <Row
        title="Success"
        item1={['success.light', 'success.light', colors.palette.success.dark]}
        item2={['success.main', 'success.main', colors.palette.success.dark]}
        item3={['success.dark', 'success.dark', colors.palette.success.dark]}
      />
    </Container>
  );
};

export default Palette;

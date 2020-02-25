import React from 'react';
import { Typography, Grid, Tooltip } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const Typos = () => {
  const useStyles = makeStyles(() =>
    createStyles({
      typoToShow: {
        flexGrow: 0,
        marginBottom: '25px',
      },
      tooltip: {
        maxWidth: 130,
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Tooltip
        title="font-size: 2.25rem, font-weight: bold, color: #3d4451, margin: 10px 0 30px"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="h1" className={classes.typoToShow}>
          h1. Heading
        </Typography>
      </Tooltip>
      <Tooltip
        title="font-size: 1.875rem, font-weight: bold, color: #3d4451, margin: 10px 0 20px"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="h2" className={classes.typoToShow}>
          h2. Heading
        </Typography>
      </Tooltip>
      <Tooltip
        title="font-size: 1.25rem, color: #000000, margin: 10px 0 10px"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="body1" className={classes.typoToShow}>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Tooltip>
      <Tooltip
        title="font-size: 1rem, color: rgb(61, 68, 81), margin: 10px 0 10px"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography variant="body2" className={classes.typoToShow}>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Tooltip>
      <Tooltip
        title="font-size: 1rem, color: rgb(61, 68, 81)"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography
          variant="button"
          display="block"
          className={classes.typoToShow}
        >
          button text
        </Typography>
      </Tooltip>
      <Tooltip
        title="font-size: .8rem, color: rgb(61, 68, 81)"
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}
      >
        <Typography
          variant="caption"
          display="block"
          className={classes.typoToShow}
        >
          caption text
        </Typography>
      </Tooltip>
    </Grid>
  );
};

export default Typos;

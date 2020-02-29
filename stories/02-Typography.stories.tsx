import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Tooltip } from '@material-ui/core';

import theme from '../static/themes/theme';

export default {
  title: 'Typography',
  component: Typography,
};

export const CustomHeader = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 1rem, color: rgb(61, 68, 81)"
      placement="top-start"
    >
      <Typography variant={text('h1...h6', 'h1')} display="block">
        button text
      </Typography>
    </Tooltip>
  </ThemeProvider>
);

export const HeaderH1 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 2.25rem, font-weight: bold, color: #3d4451, margin: 10px 0 30px"
      placement="top-start"
    >
      <Typography variant="h1">Heading h1</Typography>
    </Tooltip>
  </ThemeProvider>
);

export const HeaderH2 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 1.875rem, font-weight: bold, color: #3d4451, margin: 10px 0 20px"
      placement="top-start"
    >
      <Typography variant="h2">Heading h2</Typography>
    </Tooltip>
  </ThemeProvider>
);

export const HeaderH3 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip title="default from material-ui theme" placement="top-start">
      <Typography variant="h3">Heading h3</Typography>
    </Tooltip>
  </ThemeProvider>
);

export const HeaderH4 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip title="default from material-ui theme" placement="top-start">
      <Typography variant="h4">Heading h4</Typography>
    </Tooltip>
  </ThemeProvider>
);

export const HeaderH5 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip title="default from material-ui theme" placement="top-start">
      <Typography variant="h5">Heading h5</Typography>
    </Tooltip>
  </ThemeProvider>
);

export const HeaderH6 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip title="default from material-ui theme" placement="top-start">
      <Typography variant="h6">Heading h6</Typography>
    </Tooltip>
  </ThemeProvider>
);

export const Body1 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 1.25rem, color: #000000, margin: 10px 0 10px"
      placement="top-start"
    >
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Tooltip>
  </ThemeProvider>
);

export const Body2 = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 1rem, color: rgb(61, 68, 81), margin: 10px 0 10px"
      placement="top-start"
    >
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Tooltip>
  </ThemeProvider>
);

export const ButtonText = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 1rem, color: rgb(61, 68, 81)"
      placement="top-start"
    >
      <Typography variant="button" display="block">
        button text
      </Typography>
    </Tooltip>
  </ThemeProvider>
);

export const CustomText = () => (
  <ThemeProvider theme={theme}>
    <Tooltip
      title="font-size: 1rem, color: rgb(61, 68, 81)"
      placement="top-start"
    >
      <Typography
        variant={text(
          'body1/body2/overline/caption/button/inherit',
          'overline'
        )}
        display="block"
      >
        button text
      </Typography>
    </Tooltip>
  </ThemeProvider>
);

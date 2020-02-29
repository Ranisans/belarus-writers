/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import SearchComponent from '../src/components/Search';
import theme from '../static/themes/theme';

interface InputProp {
  target: {
    value: string;
  };
}

export default {
  title: 'Input',
  component: SearchComponent,
};

export const Input = () => {
  const [input, setinput] = useState('');
  const handleChange = ({ target: { value } }: InputProp) => {
    setinput(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchComponent query={input} handleChange={handleChange} />
    </ThemeProvider>
  );
};

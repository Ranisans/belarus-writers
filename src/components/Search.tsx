import React, { FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../static/themes/theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    color: theme.palette.text.secondary,
    fontFamily: '"Din", sans-serif',
  },
});

interface SearchProps {
  query: string;
  handleChange: (e: FormEvent) => void;
}

const Search: React.FC<SearchProps> = ({ query, handleChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input
        className={styles.input}
        value={query}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end" disablePointerEvents>
            <IconButton aria-label="toggle password visibility">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default Search;

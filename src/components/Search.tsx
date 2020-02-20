import React, { FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../static/theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',

    '& .MuiInput-underline:hover:before': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
    },
  },
  input: {
    color: theme.palette.text.secondary,
    fontFamily: '"Din", sans-serif',
  },
});

interface SearchProps {
  query: string;
  handleChange: (e: FormEvent) => void;
  handleSumbit: (e: FormEvent) => void;
}

const Search: React.FC<SearchProps> = ({
  query,
  handleChange,
  handleSumbit,
}) => {
  const styles = useStyles();

  return (
    <form className={styles.root} onSubmit={handleSumbit}>
      <Input
        className={styles.input}
        value={query}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleSumbit}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  );
};

export default Search;

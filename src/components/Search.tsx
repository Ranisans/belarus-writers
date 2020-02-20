import React, { FormEvent } from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import theme from '../../static/theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',

    '& .MuiInput-underline:hover:before': {
      borderBottomColor: theme.palette.primary.main, // Solid underline on hover
    },
  },
  input: {
    color: theme.palette.text.secondary,
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
        type="search"
        className={styles.input}
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;

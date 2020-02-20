import React, { FormEvent } from 'react';
import Input from '@material-ui/core/Input';

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
  return (
    <form onSubmit={handleSumbit}>
      <Input type="search" value={query} onChange={handleChange} />
    </form>
  );
};

export default Search;

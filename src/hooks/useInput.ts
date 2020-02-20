import { useState, FormEvent } from 'react';

const useInput = () => {
  const [input, setInput] = useState('');

  const handleChange = (e: FormEvent) => {
    setInput((e.target as HTMLInputElement).value);
  };

  return [input, handleChange] as const;
};

export default useInput;

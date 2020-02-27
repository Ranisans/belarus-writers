import { useState, FormEvent } from 'react';
import { Edge } from '../types';

const useSearch = (initEdges: Array<Edge>) => {
  const [input, setInput] = useState('');
  const [edges, setEdges] = useState(initEdges);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;

    setInput(value);

    setEdges(
      initEdges.filter(edge => {
        const { fullName, placeOfBirth } = edge.node.frontmatter;
        const matcher = new RegExp(value, 'i');

        return fullName.match(matcher) || placeOfBirth.match(matcher);
      })
    );
  };

  return [input, edges, handleChange] as const;
};

export default useSearch;

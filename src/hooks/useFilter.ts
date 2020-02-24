import { useState, FormEvent } from 'react';
import { Edge } from '../types';

const useFilter = (initEdges: Array<Edge>, query: string) => {
  const [edges, setEdges] = useState(initEdges);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setEdges(
      initEdges.filter(edge => {
        const { fullName, placeOfBirth } = edge.node.frontmatter;
        const matcher = new RegExp(query, 'i');

        return fullName.match(matcher) || placeOfBirth.match(matcher);
      })
    );
  };

  return [edges, handleSubmit] as const;
};

export default useFilter;

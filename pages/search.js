// pages/search.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/search?query=${query}`)
        .then((response) => response.json())
        .then((data) => setResults(data.results));
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query = '') => {
    setLoading(true);
    // Fetch movies from API here
    // Example API call: const response = await fetch(`https://api.example.com/movies?search=${query}`);
    // const data = await response.json();
    // setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(); // Fetch popular movies on initial load
  }, []);

  const handleSearch = (query) => {
    fetchMovies(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;

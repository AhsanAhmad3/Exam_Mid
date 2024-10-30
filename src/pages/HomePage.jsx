// HomePage.jsx
import React from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const HomePage = ({ movies, onSearch }) => {
  return (
    <div className="container">
      <SearchBar onSearch={onSearch} />
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

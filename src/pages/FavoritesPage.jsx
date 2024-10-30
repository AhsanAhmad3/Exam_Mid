// FavoritesPage.jsx
import React from 'react';
import MovieList from '../components/MovieList';

const FavoritesPage = ({ favoriteMovies }) => {
  return (
    <div className="container">
      <h1>Your Favorite Movies</h1>
      <MovieList movies={favoriteMovies} />
    </div>
  );
};

export default FavoritesPage;

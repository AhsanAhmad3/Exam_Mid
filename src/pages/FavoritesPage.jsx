import { useContext } from 'react';
import MovieList from '../components/MovieList';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Your Favorite Movies</h1>
      {favorites.length ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;

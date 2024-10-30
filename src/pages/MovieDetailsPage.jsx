// MovieDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="container">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p>Release Date: {movie.releaseDate}</p>
          <p>Rating: {movie.rating}</p>
          <img
            src={`https://via.placeholder.com/300x450?text=${movie.title}`}
            alt={movie.title}
            style={{ borderRadius: '10px' }}
          />
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

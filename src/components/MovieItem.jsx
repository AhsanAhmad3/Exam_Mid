// MovieItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/movie.css'; 


// const MovieItem = ({ movie }) => {
//   return (
//     <div className="movie-card">
//       <img
//         src={`https://via.placeholder.com/300x450?text=${movie.title}`}
//         alt={movie.title}
//         className="movie-img"
//       />
//       <h3>{movie.title}</h3>
//       <p>Release Date: {movie.releaseDate}</p>
//       <p>Rating: ⭐ {movie.rating}</p>
//       <Link to={`/movie/${movie.id}`} className="details-link">
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default MovieItem;




const MovieItem = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src={movie.image} 
        alt={movie.title} 
        className="movie-image" 
        style={{ width: '300px', borderRadius: '10px' }}
      />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieItem;

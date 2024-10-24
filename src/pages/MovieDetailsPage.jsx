import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      // Fetch movie details from API using ID
      // Example API call: const response = await fetch(`https://api.example.com/movie/${id}`);
      // const data = await response.json();
      // setMovie(data);
      setLoading(false);
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      {/* Display other movie details here */}
    </div>
  );
};

export default MovieDetailsPage;

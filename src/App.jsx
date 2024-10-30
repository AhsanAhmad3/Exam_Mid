// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritesPage';

// Sample hardcoded movie data
const moviesData = [
  { id: 1, title: 'Inception', releaseDate: '2010', rating: 8.8, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH&psig=AOvVaw3Su89n6vk3tnpnvn3MafhM&ust=1729836111371000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCX_-irpokDFQAAAAAdAAAAABAE' },
  { id: 2, title: 'The Matrix', releaseDate: '1999', rating: 8.7 , image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcR5DoFtShSmClflZ0RzBj9JBMweU5IUVBCeEbbLeV2XPlCnTKNi&psig=AOvVaw3S5YdZUNGv0A4OSKSE-_4r&ust=1729836060389000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCZ3tCrpokDFQAAAAAdAAAAABAE'},
  { id: 3, title: 'Interstellar', releaseDate: '2014', rating: 8.6 , image:  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg&psig=AOvVaw2afRVDblTufGzm4z5r9A_G&ust=1729835725249000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjwhbmqpokDFQAAAAAdAAAAABAE' },
  { id: 4, title: 'The Dark Knight', releaseDate: '2010', rating: 8.1 ,image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug&psig=AOvVaw0dz5Gt7Ql66ryJ6vck53a2&ust=1729836138167000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDH4vWrpokDFQAAAAAdAAAAABAE'},
  { id: 5, title: 'The Lion king', releaseDate: '1999', rating: 8.9 , image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRNviEmFZs763Ex1O9GUk-XcTMtws6FEuXV73fn-g6ZBuIsGvYz&psig=AOvVaw3GVrSh4HKpg-sD9PYOov6a&ust=1729836167110000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLC3gYSspokDFQAAAAAdAAAAABAE'},
  { id: 6, title: 'Harry Potter', releaseDate: '2014', rating: 8.6 , image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQMXiXr846cpzfD-JsSJgteVBmlSgoyFtggYl-noUqiDol7u0Bt&psig=AOvVaw1H2ApUtntny55sjvDikY-X&ust=1729836197464000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJClppKspokDFQAAAAAdAAAAABAE'},
];

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleSearch = (query) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage movies={movies} onSearch={handleSearch} />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetailsPage movies={moviesData} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favoriteMovies={favoriteMovies} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

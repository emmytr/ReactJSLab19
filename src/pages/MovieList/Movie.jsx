
import React, { useState, useEffect } from 'react';
import styles from './movie.module.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

// Base URL for all API requests
const API_BASE_URL = 'https://api.themoviedb.org/3';

// API key
const API_KEY = 'a090b75e1744dd94d481ba67ad26903e';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

// Create component MovieList
function MovieList({ category, fetchUrl, isOriginals }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate for navigation

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_BASE_URL}${fetchUrl}`);
      const data = await response.json();
      setMovies(data.results);
    }

    fetchData();
  }, [fetchUrl]);

  // Function to handle movie click and navigate to the details page
  const handleMovieClick = (movieId) => {
    const mediaType = isOriginals ? 'tv' : 'movie';  // If Netflix Originals, it's a TV show
    navigate(`/movie/${movieId}`, { state: { mediaType, category } });  // Navigate to the movie details page with movieId and Pass category in state
  };

  return (
    <div className={styles.group}>
      <h2>{category}</h2>
      <div className={styles.movieContainer}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`${styles.movieItem} ${isOriginals ? styles.netflixOriginals : styles.otherGenres}`}
            onClick={() => handleMovieClick(movie.id)}  // Navigate on click
          >
            {/* Conditional rendering: show poster for Netflix Originals, backdrop for other genres */}
            <img
              src={`https://image.tmdb.org/t/p/w500${isOriginals ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              className={styles.movieImage}
            />

          </div>
        ))}
      </div>
    </div >
  );
}

function Movie() {
  return (
    <div>
      <MovieList category="" fetchUrl={requests.fetchNetflixOriginals} isOriginals={true} />
      <MovieList category="Xu hướng" fetchUrl={requests.fetchTrending} isOriginals={false} />
      <MovieList category="Xếp hạng cao" fetchUrl={requests.fetchTopRated} isOriginals={false} />
      <MovieList category="Hành động" fetchUrl={requests.fetchActionMovies} isOriginals={false} />
      <MovieList category="Hài" fetchUrl={requests.fetchComedyMovies} isOriginals={false} />
      <MovieList category="Kinh dị" fetchUrl={requests.fetchHorrorMovies} isOriginals={false} />
      <MovieList category="Lãng mạn" fetchUrl={requests.fetchRomanceMovies} isOriginals={false} />
      <MovieList category="Tài liệu" fetchUrl={requests.fetchDocumentaries} isOriginals={false} />
    </div>
  );
}

export default Movie;


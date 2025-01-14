import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams, useLocation, useNavigate } from 'react-router-dom';  // Import useParams to get movieId from URL and useLocation to retrieve the category from the state object
import styles from './movieDetails.module.css';
import NavBar from '../NavBar/NavBar';


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a090b75e1744dd94d481ba67ad26903e';

const opts = {
    height: '400',
    width: '100%',
    playerVars: {
        autoplay: 0,
    },
};

function MovieDetails() {
    const { movieId } = useParams();  // Get the movieId from the URL
    const location = useLocation();  // Get location object
    const category = location.state?.category || '';
    const mediaType = location.state?.mediaType || 'movie' // Get mediaType from state, default to 'movie'
    const navigate = useNavigate()
    const [movie, setMovie] = useState(null);  // Store the movie details
    const [videoKey, setVideoKey] = useState(null);  // Store the YouTube video key
    const [sameGenreMovies, setSameGenreMovies] = useState([]);  // Movies from the same genre

    useEffect(() => {
        // Fetch movie details based on movieId
        async function fetchMovieDetails() {
            try {
                // Use the correct endpoint based on media type
                const endpoint = mediaType === 'tv' ? `/tv/${movieId}` : `/movie/${movieId}`;
                const response = await fetch(`${API_BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setMovie(data);

                // Fetch movies from the same genre after getting movie details
                if (data.genres && data.genres.length > 0) {
                    const genreId = data.genres[0].id;  // Use the first genre ID
                    fetchSameGenreMovies(genreId);
                }
            } catch (error) {
                console.error('Error fetching movie/TV show details:', error);
            }
        }


        // Fetch movie trailer or teaser
        async function fetchMovieVideo() {
            const endpoint = mediaType === 'tv' ? `/tv/${movieId}` : `/movie/${movieId}`;
            const response = await fetch(`${API_BASE_URL}${endpoint}/videos?api_key=${API_KEY}`);
            const data = await response.json();
            const trailer = data.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');
            const teaser = data.results.find(video => video.site === 'YouTube' && video.type === 'Teaser');
            setVideoKey(trailer ? trailer.key : teaser ? teaser.key : null);
        }

        // Fetch movies with the same genre
        async function fetchSameGenreMovies(genreId) {
            try {
                const endpoint = mediaType === 'tv'
                    ? `/discover/tv?api_key=${API_KEY}&with_genres=${genreId}&with_network=123`  // Netflix Originals by genre
                    : `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;  // Use the correct endpoint based on mediaType
                const response = await fetch(`${API_BASE_URL}${endpoint}`);
                const data = await response.json();
                setSameGenreMovies(data.results);
            } catch (error) {
                console.error('Error fetching same genre movies/TV shows:', error);
            }
        }

        fetchMovieDetails();
        fetchMovieVideo();
    }, [movieId, mediaType]);  // Re-run this effect when movieId &mediaType change

    // Function to handle movie click from same genre movies
    const handleMovieClick = (clickedMovieId) => {
        if (clickedMovieId === parseInt(movieId)) {
            // If the same movie is clicked, navigate back to the browse page
            navigate('/');
        } else {
            // If a different movie is clicked, navigate to the new movie detail page
            navigate(`/movie/${clickedMovieId}`, { state: { category, mediaType } });
        }
    };

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '50px' }}></div>
            {/* Same Genre Movies */}
            <div className={styles.group}>
                <h2>{category}</h2>
                <div className={styles.movieContainer}>
                    {sameGenreMovies.map(sameGenreMovie => (
                        <div key={sameGenreMovie.id} className={styles.movieItem}
                            onClick={() => handleMovieClick(sameGenreMovie.id)}>
                            {/* Handle movie click */}
                            <img
                                src={`https://image.tmdb.org/t/p/w200${sameGenreMovie.backdrop_path}`}
                                alt={sameGenreMovie.title || sameGenreMovie.name}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.movieDetails}>
                <div className={styles.movieContent}>
                    <h2>{movie.name || movie.title}</h2>
                    <hr className={styles.line} />
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average}</p>
                    <p>{movie.overview}</p>
                </div>

                {/* Placeholder for the trailer */}
                <div className={styles.movieTrailer}>
                    <div className={styles.videoContainer}>
                        {videoKey ? (
                            <YouTube videoId={videoKey} opts={opts} />
                        ) : (
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.name}
                                className={styles.movieBackdrop}
                            />
                        )}
                    </div>
                </div>

            </div>
        </div >
    );
}

export default MovieDetails;


import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';

// Base URL for all API requests
const API_BASE_URL = 'https://api.themoviedb.org/3';

// API key
const API_KEY = 'a090b75e1744dd94d481ba67ad26903e';

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
};

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${API_BASE_URL}${requests.fetchNetflixOriginals}`);
            const data = await response.json();
            const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]
            setMovie(randomMovie)
        }
        fetchData();
    }, []);

    if (!movie) return null; // Prevent rendering if movie is not yet set

    return (
        <div><header
            className={styles.banner}
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className={styles.bannerContents}>
                {/* Title */}
                <h1 className={styles.bannerTitle}>
                    {movie.name}
                </h1>

                {/* Movie Description */}
                <div className={styles.bannerDescription}>
                    {movie?.overview && movie.overview.length > 150
                        ? movie.overview.substr(0, 150) + '...'
                        : movie.overview}
                </div>

                {/* Buttons (if you want to add them) */}
                <div className={styles.bannerButtons}>
                    <button className={styles.bannerButton}>Play</button>
                    <button className={styles.bannerButton}>My List</button>
                </div>
            </div>

            {/* Optional Fade at the bottom */}
            <div className={styles.bannerFadeBottom} />
        </header></div>
    )
};



export default Banner;



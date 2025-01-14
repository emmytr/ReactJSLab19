import React from 'react';
import styles from './resultList.module.css'

function ResultList({ movies = [], handleMovieClick }) {
    return (
        <>
            <h1>Search Result</h1>
            <div className={styles.resultsContainer}>
                {movies.length > 0 ? (
                    <div className={styles.results}>
                        {movies.map(movie => (
                            <div
                                key={movie.id}
                                className={styles.movieItem}
                                onClick={() => handleMovieClick(movie.id)}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title || movie.name}
                                />

                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </>)
}

export default ResultList


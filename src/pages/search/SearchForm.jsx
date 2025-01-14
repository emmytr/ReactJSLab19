import React, { useState } from 'react';
import styles from './searchForm.module.css';
import { useNavigate } from 'react-router-dom';
import ResultList from './ResultList';



const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a090b75e1744dd94d481ba67ad26903e';

function SearchForm() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate()

    // Function to handle form submission
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;


        // Fetch movies from the API
        try {
            const response = await fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=en&query=${query}`);
            const data = await response.json();
            setMovies(data.results || [])
            console.log(movies)
        } catch (error) {
            console.error('Error fetching search results:', error);
            setMovies([]);  // In case of error, reset movies to an empty array
        }
    }

    // Function to handle clicking on a movie poster
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);  // Navigate to the movie details page with movieId
    };


    return (
        <div className={styles.searchForm}>
            <form className={styles.form} onSubmit={handleSearch}>
                <div className={styles.inputContent}>
                    <input
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} // Update query state with input value
                        placeholder='Search for a movie...' />
                    <svg className={styles.searchIcon}
                        fill='#ccc'
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='search'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
                    </svg>
                </div>
                <div className={styles.buttonGroup}>
                    <button type='reset' onClick={() => setQuery('')} >RESET</button>
                    <button type='submit'>SEARCH</button>
                </div>
            </form>

            {/* Pass movies and handleMovieClick to ResultList */}
            <ResultList movies={movies} handleMovieClick={handleMovieClick} />
        </div>
    )
}

export default SearchForm

import React from 'react';
import NavBar from '../NavBar/NavBar';
import Movie from '../MovieList/Movie';
import Banner from '../Banner/Banner'


function Browse() {
	return (
		<div className="app">
			<NavBar />
			<Banner />
			<Movie />
		</div>
	);
}

export default Browse;


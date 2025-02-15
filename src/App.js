import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';
import MovieDetails from './pages/MovieDetail/MovieDetails';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Browse />} />
				<Route path="/search" element={<Search />} />
				<Route path="/movie/:movieId" element={<MovieDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

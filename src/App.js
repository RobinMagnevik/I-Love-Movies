import React from 'react';
import './App.css';
import MoviePopUp from './components/popUp//MoviePopUp';
import FilterMovies from './components/popUp/FilterMovies';
import ShowFormResults from './components/formAndRedux/ShowFormResults';
// import MoviesForm from './components/MoviesForm';
// import StartPage from './components/StartPage';

import { useSelector } from 'react-redux';

function App() {
	const data = useSelector(state => state.addFavoriteList)
	const filmList = data.map(item => (
		<div key={item.id}>
			<p>Title: {item.film.title} </p>
			<p>Description: {item.film.description} </p>
			<p>Genre: {item.film.genre}</p>
			<p>Id: {item.film.id}</p>
			<p>THROUGH REDUX</p>
		</div>
	))

  return (
    <div className="App">
	  {/* <MoviesForm /> */}
	  <MoviePopUp />
	  <FilterMovies />
	  <ShowFormResults />
	  {/* <StartPage /> */}


	  <span>{filmList}</span>
    </div>
  );
}

export default App;

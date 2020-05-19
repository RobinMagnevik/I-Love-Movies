import React from 'react';
import './App.css';
// import MoviesForm from './components/MoviesForm';
import MoviePopUp from './components/popUp//MoviePopUp';
// import StartPage from './components/StartPage';
import FilterMovies from './components/popUp/FilterMovies';

function App() {
  return (
    <div className="App">
	  {/* <MoviesForm /> */}
	  <MoviePopUp />
	  <FilterMovies />
	  {/* <StartPage /> */}
    </div>
  );
}

export default App;

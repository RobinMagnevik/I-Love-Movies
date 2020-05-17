import React from 'react';
import './App.css';
import MoviesForm from './components/MoviesForm';
import MoviePopUp from './components/MoviePopUp';

function App() {
  return (
    <div className="App">
	  <MoviesForm />
	  <MoviePopUp />
    </div>
  );
}

export default App;

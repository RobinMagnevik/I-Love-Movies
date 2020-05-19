import React from 'react';
import './App.css';
import MoviesForm from './components/MoviesForm';
import MoviePopUp from './components/MoviePopUp';
import Inspiration from './components/InspirationMovie';

function App() {
  return (
    <div className="App">
	  <MoviesForm />
	  <MoviePopUp />
    <Inspiration />
    </div>
  );
}

export default App;

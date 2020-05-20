import React from 'react';
import './App.css';
import AddTitles from './components/AddTitles'
import Header from './components/header/Header'
import MoviePopUp from './components/MoviePopUp';
<<<<<<< HEAD
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

=======
import Favorites from "./components/Favorites";

function App() {
	return (
		<div className="App">
			<Header/>
			<div className="add-title-page">
			<AddTitles />
			</div>
			<div>
			<MoviePopUp />
			</div>
			<div>
			<Favorites />
			</div>
		</div>
	);
	}
>>>>>>> a1d7930c08f75671f4fde7cee93c997cc16a492b
export default App;

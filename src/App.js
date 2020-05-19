import React from 'react';
import './App.css';
// import MoviesForm from './components/MoviesForm';
import AddTitles from './components/AddTitles'
import Header from './components/header/Header'
import MoviePopUp from './components/MoviePopUp';

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
		</div>
	);
	}
export default App;

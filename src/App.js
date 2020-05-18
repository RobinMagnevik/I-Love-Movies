import React from 'react';
import './App.css';
// import MoviesForm from './components/MoviesForm';
import AddTitles from './components/AddTitles'
import Header from './components/header/Header'

function App() {
	return (
		<div className="App">
			<Header/>
			<div className="add-title-page">
			<AddTitles />
			</div>
		</div>
	);
}

export default App;

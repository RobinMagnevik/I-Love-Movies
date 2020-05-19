import React, { useState } from 'react';
import './App.css';
import AddTitles from './components/AddTitles'
// import Header from './components/header/Header'
import MoviePopUp from './components/MoviePopUp';
import Favorites from "./components/Favorites";

const [toShow, setToShow] = useState('')

function App() {
	return (
		<div className="App">
			<header className="header-section">
				<h1>I love movies</h1>
				<nav className="nav-field">
					<button className="nav-button" onClick={() => setToShow('addTitles')}>
						Start
					</button>
					<button className="nav-button" onClick={() => setToShow('favorites')}>
						Favoriter
					</button>
					<button className="nav-button" onClick={() => setToShow('inspiration')}>
						Inspiration
					</button>
				</nav>
			</header>
			{/* <Header/> */}
			<div className="add-title-page" style={toShow === 'addTitles' ? {display: 'block'} : {display: 'none'}}>
			<AddTitles />
			</div>
			<div>
			<MoviePopUp />
			</div>
			<div style={toShow === 'favorites' ? {display: 'block'} : {display: 'none'}}>
			<Favorites />
			</div>
			<div style={toShow === 'inspiration' ? {display: 'block'} : {display: 'none'}}> 
				{/* Place inspiration-page-tag here! :) */}
			</div>
		</div>
	);
}
export default App;

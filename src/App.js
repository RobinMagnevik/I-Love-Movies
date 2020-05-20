import React from 'react';
import './App.css';
import AddTitles from './components/AddTitles'
import Header from './components/header/Header'
import MoviePopUp from './components/MoviePopUp';
import Favorites from "./components/Favorites";
import InspirationMovie from "./components/InspirationMovie";

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
			<div>
			<InspirationMovie />
			</div>
		</div>
	);
	}
export default App;

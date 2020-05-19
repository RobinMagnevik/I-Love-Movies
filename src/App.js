import React from "react";
import "./App.css";
import MoviesForm from "./components/MoviesForm";
import Favorites from "./components/Favorites";

function App() {
	return (
		<div className="App">
			<MoviesForm />
			<Favorites />
		</div>
	);
}

export default App;

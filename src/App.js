import React, { useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import InspirationMovie from "./components/InspirationMovie";
import AddFavorite from "./components/AddFavorite";
import StartPage from "./components/StartPage";

function App() {
  const [toShow, setToShow] = useState("");

	return (
		<div className="App">
			<header className="header-section">
				<h1>I love movies</h1>
				<nav className="nav-field">
					<button className="nav-button" onClick={() => setToShow("addTitles")}>
						Start
					</button>
					<button className="nav-button" onClick={() => setToShow("favorites")}>
						Favoriter
					</button>
					<button
						className="nav-button"
						onClick={() => setToShow("inspiration")}
					>
						Inspiration
					</button>
				</nav>
			</header>
	
			<div
				className="add-title-page"
				style={
					toShow === "addTitles" ? { display: "block" } : { display: "none" }
				}
			>				
				<AddFavorite />
				
			</div>
			<div>
			<StartPage />
			
			</div>
			<div
				style={
					toShow === "favorites" ? { display: "block" } : { display: "none" }
				}
			>
				<Favorites />
			</div>
			<div
				style={
					toShow === "inspiration" ? { display: "block" } : { display: "none" }
				}
			>
				<InspirationMovie />
			</div>

			
		</div>
	);
}
export default App;

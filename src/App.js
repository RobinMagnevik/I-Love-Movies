import React, { useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import InspirationMovie from "./components/InspirationMovie";
import AddFavorite from "./components/AddFavorite";
import StartPage from "./components/StartPage";
import WelcomeBackPage from "./components/WelcomeBackPage";

function App() {
	const [toShow, setToShow] = useState("addTitles");

	const [localStorageName] = useState(() => {
		let localStorageName = window.localStorage.getItem("name");
		if (localStorage.getItem("name") === null) {
			return null;
		} else return localStorageName + "'s movie page!";
	});

	return (
		<div className="App">
			<header className="header-section">
			<p className="welcomeHeaderText">{localStorageName}</p>
				<h1 className="headerLogo">I LOVE MOVIES</h1>
				<nav className="navField">
					<button className="navButton" onClick={() => setToShow("addTitles")}>
						Start
					</button>
					<button className="navButton" onClick={() => setToShow("favorites")}>
						Favorites
					</button>
					<button
						className="navButton"
						onClick={() => setToShow("inspiration")}
					>
						Inspiration
					</button>
				</nav>
				<div>
				<StartPage className="startPageComp"/>
			</div>
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
				<WelcomeBackPage />
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

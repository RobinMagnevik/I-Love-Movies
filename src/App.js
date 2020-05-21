import React from 'react';
import './App.css';
import MoviePopUp from './components/popUp//MoviePopUp';
import FilterMovies from './components/popUp/FilterMovies';
import ShowFormResults from './components/formAndRedux/ShowFormResults';
// import MoviesForm from './components/MoviesForm';
// import StartPage from './components/StartPage';

import { useSelector } from 'react-redux';

function App() {
  const [toShow, setToShow] = useState("");
  
  
	const data = useSelector(state => state.addFavoriteList)
	const filmList = data.map(item => (
		<div key={item.id}>
			<p>Title: {item.film.title} </p>
			<p>Description: {item.film.description} </p>
			<p>Genre: {item.film.genre}</p>
			<p>Id: {item.film.id}</p>
			<p>THROUGH REDUX</p>
		</div>
	))

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
			{/* <Header/> */}
			<div
				className="add-title-page"
				style={
					toShow === "addTitles" ? { display: "block" } : { display: "none" }
				}
			>
				<AddTitles />
			</div>
			<div>
				<MoviePopUp />
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


	  <span>{filmList}</span>
    </div>
  );
}
export default App;

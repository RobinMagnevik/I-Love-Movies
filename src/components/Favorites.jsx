import React, { useState } from "react";
import "../cssFolder/favorites.css";
import { useSelector } from "react-redux";
import MoviePopUp from "./MoviePopUp";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import EditForm from "./EditForm";

const FilterMovies = () => {
	const [search, setSearch] = useState("");
	const [mode, setMode] = useState("all");

	const data = useSelector((state) => state.addFavoriteList);

	const dispatch = useDispatch();

	const mixedList = data.map((item) => {
		if (search.length !== 0) {
			if (
				item.film.title.toLowerCase().match(search.toLowerCase()) ||
				item.film.description.match(search)
			) {
				return (
					<div key={item.film.id}>
						<div key={item.film.id}>
						<h3 className="titleFavoritePage">{item.film.title} ({item.film.year})</h3>
							<img className="posterFavoritePage" src={item.film.poster} alt="" />
							<p className="ratingFavoritePage"><span className="fa" >&#xf005;</span> {item.film.rating + '/10'} </p>

							<div className="showDeleteEditButtonsDiv">
							<MoviePopUp item={item} key={item.id} />
							<button className="buttonsInFavoriteList" onClick={() => dispatch(actions.removeFromMovieList(item.film.title))}>
								Delete </button> 
							<EditForm item={item}  />
							</div>

						</div>
					</div>
				);
			} else {
				return null;
			}
		}
		return (
			<div key={item.film.title}>
				<div>
				<h3 className="titleFavoritePage">{item.film.title} ({item.film.year})</h3>
							<img className="posterFavoritePage" src={item.film.poster} alt="" />
							<p className="ratingFavoritePage"><span className="fa" >&#xf005;</span> {item.film.rating + '/10'} </p>

							<div className="showDeleteEditButtonsDiv">
							<MoviePopUp item={item} key={item.id} />
							<button className="buttonsInFavoriteList" onClick={() => dispatch(actions.removeFromMovieList(item.film.title))}>
								Delete </button> 
							<EditForm item={item}  />
							</div>
					
				</div>
			</div>
		);
	});

	let filterByMovie = data.filter((item) => {
		return item.film.ofType.match("movie");
	});
	let filterBySerie = data.filter((item) => {
		return item.film.ofType.match("serie");
	});

	return (
		<div className="wrapper">
			<input
				className="input-field"
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<select
				className="select-styling"
				name="select"
				id="select"
				onChange={(e) => setMode(e.target.value)}
			>
				<option value="all">All</option>
				<option value="movies">Movies</option>
				<option value="series">Series</option>
			</select>
			<br />

			<div>
				{mode === "all" ? (
					<div className="movie-styling">{mixedList}</div>
				) : null}

				
				{mode === "movies" ? (
					<div className="movie-styling">
						{filterByMovie.map((item) => (
							<div key={item.film.title}>
							<h3 className="titleFavoritePage">{item.film.title} ({item.film.year})</h3>
							<img className="posterFavoritePage" src={item.film.poster} alt="" />
							<p className="ratingFavoritePage"><span className="fa" >&#xf005;</span>{item.film.rating + '/10'} </p>

							<div className="showDeleteEditButtonsDiv">
							<MoviePopUp item={item} key={item.id} />
							<button className="buttonsInFavoriteList" onClick={() => dispatch(actions.removeFromMovieList(item.film.title))}>
								Delete </button> 
							<EditForm item={item}  />
							</div>

							</div>
						))}
					</div>
				) : null}

				{mode === "series" ? (
					<div className="movie-styling">
						{filterBySerie.map((item) => (
							<div key={item.film.title}>
							<h3 className="titleFavoritePage">{item.film.title} ({item.film.year})</h3>
							<img className="posterFavoritePage" src={item.film.poster} alt="" />
							<p className="ratingFavoritePage"><span className="fa" >&#xf005;</span> {item.film.rating + '/10'} </p>

							<div className="showDeleteEditButtonsDiv">
							<MoviePopUp item={item} key={item.id} />
							<button className="buttonsInFavoriteList" onClick={() => dispatch(actions.removeFromMovieList(item.film.title))}>
								Delete </button> 
							<EditForm item={item}  />
							</div>
							
							

							</div>
						))}
					</div>
				) : null}

			</div>
		</div>
	);
};
export default FilterMovies;

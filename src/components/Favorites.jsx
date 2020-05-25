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
	const [toggle, setToggle] = useState(false)

	const data = useSelector((state) => state.addFavoriteList);
	// const filmList = data.map(item => (
	// 	<div key={item.id}>
	// 		<p>Title: {item.film.title} </p>
	// 		<p>Description: {item.film.description} </p>
	// 		<p>Genre: {item.film.genre}</p>
	// 		<p>Id: {item.film.id}</p>
	// 		<p>THROUGH REDUX</p>
	// 	</div>
	// ))

	console.log(data);

	const dispatch = useDispatch();

	const mixedList = data.map((item) => {
		if (search.length !== 0) {
			if (
				item.film.title.toLowerCase().match(search.toLowerCase()) ||
				item.film.description.match(search)
			) {
				return (
					<div>
						<div key={item.title}>
							<h2>{item.film.title} </h2>
							<p>Genre: {item.film.genre}</p>
							<p>About: {item.film.description}</p>
							<p>Year: {item.film.year}</p>
							<p>{item.film.ofType}</p>
							<p>Rating: {item.film.rating} </p>
							<MoviePopUp item={item} key={item.id} />

							<button
								className="startPageWelcomeButton"
								onClick={() =>
									dispatch(actions.removeFromMovieList(item.film.title))
								}
							>
								Delete
							</button>
							<button className="startPageWelcomeButton" onClick={() => setToggle(toggle => !toggle)}>Edit</button>
			{toggle && <EditForm item={item} /> }
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
					<h2>{item.film.title} </h2>
					<p>Genre: {item.film.genre}</p>
					<p>About: {item.film.description}</p>
					<p>Year: {item.film.year}</p>
					<p>{item.film.ofType}</p>
					<p>Rating: {item.film.rating} </p>
					<MoviePopUp item={item} key={item.id} />
					<button
						className="startPageWelcomeButton"
						onClick={() =>
							dispatch(actions.removeFromMovieList(item.film.title))
						}
					>
						Delete
					</button>
					<button className="startPageWelcomeButton" onClick={() => setToggle(toggle => !toggle)}>Edit</button>
			{toggle && <EditForm item={item}  /> }
					
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

	// const serieList = seriesArray.map((serie) => {
	// 	if (search.length !== 0) {
	// 		if (
	// 			serie.title.toLowerCase().match(search.toLowerCase()) ||
	// 			serie.rating.match(search)
	// 		) {
	// 			return (
	// 				<div key={serie.title}>
	// 					<h2>{serie.title} </h2>
	// 					<p>{serie.genre}</p>
	// 					<p>{serie.description}</p>
	// 					<p>{serie.year}</p>
	// 					<p>{serie.ofType}</p>
	// 					<p>Rating: {serie.rating}</p>
	// 				</div>
	// 			);
	// 		} else {
	// 			return null;
	// 		}
	// 	}
	// 	return (
	// 		<div key={serie.title}>
	// 					<h2>{serie.title} </h2>
	// 					<p>{serie.genre}</p>
	// 					<p>{serie.description}</p>
	// 					<p>{serie.year}</p>
	// 					<p>{serie.ofType}</p>
	// 					<p>Rating: {serie.rating}</p>
	// 				</div>
	// 	);
	// });
	// console.log("värdet av value", mode);

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
								<h2>{item.film.title} </h2>
								<p>Genre: {item.film.genre}</p>
								<p>About: {item.film.description}</p>
								<p>Year: {item.film.year}</p>
								<p>{item.film.ofType}</p>
								<p>Rating: {item.film.rating} </p>
								<MoviePopUp item={item} key={item.id} />

								<button
									className="startPageWelcomeButton"
									onClick={() =>
										dispatch(actions.removeFromMovieList(item.film.title))
									}
								>
									Delete
								</button>
								<button className="startPageWelcomeButton" onClick={() => setToggle(toggle => !toggle)}>Edit</button>
			{toggle && <EditForm item={item}  /> }
							</div>
						))}
					</div>
				) : null}

				{mode === "series" ? (
					<div className="movie-styling">
						{filterBySerie.map((item) => (
							<div className="movie-styling" key={item.film.title}>
								<h2>{item.film.title} </h2>
								<p>Genre: {item.film.genre}</p>
								<p>About: {item.film.description}</p>
								<p>Year: {item.film.year}</p>
								<p>{item.film.ofType}</p>
								<p>Rating: {item.film.rating} </p>
								<MoviePopUp item={item} key={item.id} />

								<button
									className="startPageWelcomeButton"
									onClick={() =>
										dispatch(actions.removeFromMovieList(item.film.title))
									}
								>
									Delete
								</button>
								<button className="startPageWelcomeButton" onClick={() => setToggle(toggle => !toggle)}>Edit</button>
			{toggle && <EditForm item={item}  /> }
							</div>
						))}
					</div>
				) : null}

				{/* <div>{filterByMovie}</div> */}
			</div>
		</div>
	);
};
export default FilterMovies;

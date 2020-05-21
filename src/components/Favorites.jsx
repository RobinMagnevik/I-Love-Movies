import React, { useState } from "react";
import "./favorites.css";

const FilterMovies = () => {
	const [search, setSearch] = useState("");
	const [mode, setMode] = useState("all");

	const movieArray = [
		{
			title: "Kill Bill",
			rating: "5",
		},
		{
			title: "Spiderman",
			rating: "4",
		},
		{
			title: "The Room",
			rating: "1",
		},
		{
			title: "Inception",
			rating: "5",
		},
	];

	const seriesArray = [
		{
			title: "Game of Thrones",
			rating: "5",
		},
		{
			title: "Breaking Bad",
			rating: "4",
		},
		{
			title: "Chernobyl",
			rating: "4",
		},
		{
			title: "Stranger Things",
			rating: "5",
		},
	];
	const movieList = movieArray.map((movie) => {
		if (search.length !== 0) {
			if (
				movie.title.toLowerCase().match(search.toLowerCase()) ||
				movie.rating.match(search)
			) {
				return (
					<div>
						<div key={movie.title}>
							<h2>{movie.title} </h2>
							<p>Rating: {movie.rating} </p>
						</div>
					</div>
				);
			} else {
				return null;
			}
		}
		return (
			<div key={movie.title}>
				<h2> {movie.title} </h2>
				<p>Rating: {movie.rating} </p>
			</div>
		);
	});

	const serieList = seriesArray.map((serie) => {
		if (search.length !== 0) {
			if (
				serie.title.toLowerCase().match(search.toLowerCase()) ||
				serie.rating.match(search)
			) {
				return (
					<div key={serie.title}>
						<h2>{serie.title} </h2>
						<p>Rating: {serie.rating}</p>
					</div>
				);
			} else {
				return null;
			}
		}
		return (
			<div key={serie.title}>
				<h2>{serie.title} </h2>
				<p>Rating: {serie.rating} </p>
			</div>
		);
	});
	console.log("värdet av value", mode);

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
					<div className="movie-styling">
						{serieList} {movieList}
					</div>
				) : null}
				{mode === "movies" ? (
					<div className="movie-styling">{movieList}</div>
				) : null}

				{mode === "series" ? (
					<div className="movie-styling">{serieList}</div>
				) : null}
			</div>
		</div>
	);
};
export default FilterMovies;

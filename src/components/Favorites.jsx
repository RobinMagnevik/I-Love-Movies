import React, { useState } from "react";
import "./favorites.css";

const FilterMovies = () => {
	const [search, setSearch] = useState("");
	const [value, setValue] = useState("");
	const movieArray = [
		{
			title: "Kill Bill",
			director: "Quentin Tarantino",
		},
		{
			title: "Spiderman",
			director: "Don't know",
		},
		{
			title: "Coming to America",
			director: "Don't know",
		},
	];

	const seriesArray = [
		{
			title: "Game of Thrones",
			director: "Don't know",
		},
		{
			title: "Breaking Bad",
			director: "Don't know",
		},
		{
			title: "Chernobyl",
			director: "Don't know",
		},
	];
	const movieList = movieArray.map((movie) => {
		if (search.length !== 0) {
			if (
				movie.title.toLowerCase().match(search.toLowerCase()) ||
				movie.director.toLowerCase().match(search.toLowerCase())
			) {
				return (
					<div key={movie.title}>
						<p>Title: {movie.title} </p>
						<p>Director: {movie.director} </p>
					</div>
				);
			} else {
				return null;
			}
		}
		return (
			<div key={movie.title}>
				<p>Title: {movie.title} </p>
				<p>Director: {movie.director} </p>
			</div>
		);
	});

	function test() {
		return <p>Detta är dina filmer</p>;
	}
	console.log("värdet av value", value);

	return (
		<div className="wrapper">
			<h1>Favorites component</h1>
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
				onChange={(e) => setValue(e.target.value)}
			>
				<option value="all">All</option>
				<option value="movies">Movies</option>
				<option value="series">Series</option>
			</select>
			<br />
		</div>
	);
};
export default FilterMovies;

import React, { useState } from "react";
import "./favorites.css";

const FilterMovies = () => {
	const [search, setSearch] = useState("");
	const [value, setValue] = useState("");

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
	];
	const movieList = movieArray.map((movie) => {
		if (search.length !== 0) {
			if (
				movie.title.toLowerCase().match(search.toLowerCase()) ||
				movie.rating.match(search)
			) {
				return (
					<div className="movie-styling" key={movie.title}>
						<div>
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
			<div className="movie-styling" key={movie.title}>
				<div>
					<h2> {movie.title} </h2>
					<p>Rating: {movie.rating} </p>
				</div>
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
					<div className="movie-styling" key={serie.title}>
						<div>
							<h2>{serie.title} </h2>
							<p>Rating: {serie.rating}</p>
						</div>
					</div>
				);
			} else {
				return null;
			}
		}
		return (
			<div className="movie-styling" key={serie.title}>
				<h2>{serie.title} </h2>
				<p>Rating: {serie.rating} </p>
			</div>
		);
	});
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

			<div>
				{value === "movies" ? <div>{movieList}</div> : null}

				{value === "series" ? <div>{serieList}</div> : null}

				{value === "all" ? (
					<div>
						{serieList} {movieList}
					</div>
				) : null}
			</div>
		</div>
	);
};
export default FilterMovies;

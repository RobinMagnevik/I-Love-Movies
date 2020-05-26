import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import { useSelector } from "react-redux";
import "../cssFolder/editForm.css";
import FadeEffect from './FadeEffect'

const EditForm = ({ item }) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const data = useSelector((state) => state.addFavoriteList);
	const latestList = data.slice(-3).map((item) => (
		<div key={item.id}>
			<h2>{item.film.title} </h2>
			<p>Genre: {item.film.genre}</p>
			<p>About: {item.film.description}</p>
			<p>Year: {item.film.year}</p>
			<p>{item.film.ofType}</p>
			<p>Rating: {item.film.rating} </p>
		</div>
	));

	const [movie, setMovie] = useState({
		id: "",
		title: "",
		description: "",
		genre: "action",
		ofType: "movie",
		year: "",
	});

	const handleChange = (e) => {
		setMovie({
			...movie,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (movie.genre) {
			setMovie(
				{ ...movie, title: "" },
				{ ...movie, description: "" },
				{ ...movie, genre: "" },
				{ ...movie, year: "" },
				{ ...movie, ofType: "" }
			);
		}
	};

	const handleClick = () => dispatch(actions.addToMovieList(movie));
	console.log(movie);

	return (
	<div>
		<FadeEffect show={show}>
		<div className="popUpModal">
			<div>
				<form className="form-style" onSubmit={handleSubmit}>
					<h2 className="editTitle">Edit</h2>
					<br></br>

					<input
						placeholder="Title"
						type="text"
						name="title"
						value={movie.title}
						onChange={handleChange}
					/>

					<textarea
						placeholder="Plot"
						type="text"
						name="description"
						value={movie.description}
						onChange={handleChange}
						cols="20"
						rows="5"
					></textarea>

					<div>

						<input
							placeholder="Year"
							type="number"
							name="year"
							value={movie.year}
							onChange={handleChange}
						/>
						<div>
							<label htmlFor="genre">Genre: </label>
							<select name="genre" id="genre" onChange={handleChange}>
								<option value="action">action</option>
								<option value="anime">anime</option>
								<option value="dokumentärer">dokumentärer</option>
								<option value="draman">draman</option>
								<option value="historia">history</option>
								<option value="klassiker">classic</option>
								<option value="komedier">comedy</option>
								<option value="musikaler">musical</option>
								<option value="romantic">romantic</option>
								<option value="sci-fi">sci-fi</option>
							</select>
						</div>
						<div>
							<label htmlFor="Movie">Movie: </label>
							<input
								checked={true}
								value="movie"
								type="radio"
								name="ofType"
								id="Movie"
								onChange={handleChange}
							/>
							<label htmlFor="Serie">Serie: </label>
							<input
								value="serie"
								type="radio"
								name="ofType"
								id="Serie"
								onChange={handleChange}
							/>
						</div>
					</div>

					<button
						type="submit"
						onClick={() =>
									{dispatch(actions.updateMovieList(item.film.title)); handleClick()
								}}
						className="addFavoriteToListButton"
					>
						Update
					</button>
				</form>
			</div>

		</div>
		</FadeEffect> 
			<button className="buttonsInFavoriteList" onClick={() => setShow(show => !show)}> 
		  Edit
		</button>
		</div>
	);
};

export default EditForm;

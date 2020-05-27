import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import "../cssFolder/editForm.css";
import FadeEffect from './FadeEffect'

const EditForm = ({ item }) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);


	const [movie, setMovie] = useState({
		id: item.film.id,
		title: item.film.title,
		description: item.film.description,
		genre: item.film.genre,
		ofType: item.film.ofType,
		year: item.film.year,
		poster: item.film.poster,
		rating: item.film.rating,
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
				{...movie}
			);
		}
	};
	const showImage = (event) => {
		let img = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onload = function () {
			const imgData = reader.result;
			setMovie(
				{ ...movie, poster: imgData}
			)
		};
	};

	const handleClick = () => dispatch(actions.addToMovieList(movie));

	return (
	<div>
		<FadeEffect show={show}>
		<div className="popUpModalEditForm">
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

						<input className="rating"
							placeholder="0-10"
							type="number"
							name="rating"
							value={movie.rating}
							onChange={handleChange}
							cols="10"
							rows="1"
						/>
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
							<option value=""></option>
								<option value="Action">Action</option>
								<option value="Anime">Anime</option>
								<option value="Documentary">Documentary</option>
								<option value="Drama">Drama</option>
								<option value="History">History</option>
								<option value="Classic">Classic</option>
								<option value="Comedy">Comedy</option>
								<option value="Musical">Musical</option>
								<option value="Romance">Romance</option>
								<option value="Sci-fi">Sci-fi</option>
							</select>
						</div>
						<div>
							<label htmlFor="Movie">Movie: </label>
							<input
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
					<br />
					<input
						type="file"
						id="image"
						accept=".png, .jpeg, .jpg"
						onChange={showImage}
					></input>
					<br />
					<button
						type="submit"
						onClick={() =>
									{dispatch(actions.updateMovieList(item.film.title)); handleClick(); setShow(show =>!show)
								}}
						className="addFavoriteToListButton"
					>
						Update
					</button>
				</form>
		</div>
		</FadeEffect> 
			<button className="buttonsInFavoriteList" onClick={() => setShow(show => !show)}> 
		  Edit
		</button>
		</div>
	);
};

export default EditForm;

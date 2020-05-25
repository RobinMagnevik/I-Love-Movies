import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import { useSelector } from "react-redux";
import "../cssFolder/form.css";

const Form = () => {
	const dispatch = useDispatch();
	const [broadcastMsg, setBroadcastMsg] = useState('hohohohohoh')
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
		genre: "",
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
		if(!movie.title || !movie.description || !movie.genre || !movie.year || !movie.ofType){
			console.log('inside else if');
			
			setBroadcastMsg("Please sir/madam! all fields are in need of filling!")
		}
		else if (movie.genre.trim('') || movie.title.trim('') || movie.description.trim('') || movie.year.trim('') || movie.ofType.trim('')) {
			console.log('inside if');
			dispatch(actions.addToMovieList(movie))
			setBroadcastMsg('Item has been successfully added!')
			setMovie(
				{ ...movie, title: "" },
				{ ...movie, description: "" },
				{ ...movie, genre: "" },
				{ ...movie, year: "" },
				{ ...movie, ofType: "" }
			);
		}
	};

	// const handleClick = () => dispatch(actions.addToMovieList(movie));
	console.log(movie);

	//Validering av bild man laddar upp
	function checkImage(files) {
		if (files.length === 0) {
			console.log("Ingen bild");
		} else {
			console.log("Du har laddat upp", files);
		}
	}
	console.log("värdet av fileList", FileList.length);

	return (
		<div className="main-container">
			<div className="add-title-container">
				<form className="addFavoriteToListForm">
					<div>
						<label>Title: </label>
						{/* {errors.title && <span>{errors.title}</span>}  */}
						<br />
						<input
							type="text"
							name="title"
							value={movie.title}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label>Description: </label>
						{/* {errors.description && <span>{errors.description}</span>}  */}
						<br />
						<input
							type="text"
							name="description"
							value={movie.description}
							onChange={handleChange}
						/>
					</div>

					<div>
						<label>Year: </label>
						{/* {errors.genre && <span>{errors.genre}</span>}  */}
						<br />
						<input
							type="number"
							name="year"
							value={movie.year}
							onChange={handleChange}
						/>
						<div>
							<label htmlFor="genre">Genre: </label>
							<select name="genre" id="genre" onChange={handleChange}>
							<option value=""></option>
								<option value="action">action</option>
								<option value="anime">anime</option>
								<option value="dokumentärer">dokumentärer</option>
								<option value="draman">draman</option>
								<option value="historia">historia</option>
								<option value="klassiker">klassiker</option>
								<option value="komedier">komedier</option>
								<option value="musikaler">musikaler</option>
								<option value="romantic">romantik</option>
								<option value="sci-fi">sci-fi</option>
							</select>
						</div>
						<div>
							<label htmlFor="Movie">Movie: </label>
							<input
								value="movie"
								type="radio"
								name="ofType"
								className="Movie"
								onChange={handleChange}
							/>
							<label htmlFor="Serie">Serie: </label>
							<input
								value="serie"
								type="radio"
								name="ofType"
								className="Serie"
								onChange={handleChange}
							/>
						</div>
					</div>

					<br />
					<label>Upload image</label>
					<br></br>
					<input
						type="file"
						id="image"
						accept=".png, .jpeg, .jpg"
						onChange={checkImage(FileList)}
					></input>
					<br></br>
					<button
						type="submit"
						onClick={handleSubmit}
						className="addFavoriteToListButton"
					>
						Add
					</button>
					<br></br>
					<span className='broadcast-message'>{broadcastMsg}</span>
				</form>
			</div>
			<div>
				<h1>Three latest: </h1>
				{latestList}
			</div>
		</div>
	);
};

export default Form;

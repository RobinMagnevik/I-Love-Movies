import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import { useSelector } from "react-redux";
import {v4 as uuidv4} from 'uuid'
import "../cssFolder/form.css";

const Form = () => {
	const dispatch = useDispatch();
	const [broadcastMsg, setBroadcastMsg] = useState('')
	const data = useSelector((state) => state.addFavoriteList);
	const latestList = data.slice(-3).map((item) => (
		<div key={item.film.id}>
			<h2>{item.film.title} </h2>
			<img src={item.film.poster} alt="" />
			<p>Genre: {item.film.genre}</p>
			<p>About: {item.film.description}</p>
			<p>Year: {item.film.year}</p>
			<p>{item.film.ofType}</p>
			<p>Rating: {item.film.rating} </p>
		</div>
	));

	const [movie, setMovie] = useState({
		id: uuidv4(),
		title: "",
		poster: 'http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg',
		description: "",
		genre: "",
		ofType: "",
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
			setBroadcastMsg('Item has been successfully added!')
			setMovie(
				{ ...movie, title: "" },
				{ ...movie, description: "" },
				{ ...movie, genre: "" },
				{ ...movie, year: "" },
				{ ...movie, ofType: "" },
				{ ...movie, id: uuidv4() }
				);
				dispatch(actions.addToMovieList(movie))
		}
	};

	// const handleClick = () => dispatch(actions.addToMovieList(movie));
	console.log(movie);

	//Validering av bild man laddar upp
	// function checkImage(files) {
	// 	if (files.length == 0) {
	// 		console.log("Ingen bild");
	// 	} else {
	// 		console.log("Du har laddat upp", files);
	// 	}
	// }
	// console.log("värdet av fileList", FileList.length);

	return (
		<div className="main-container">
			<div>
				<form className="form-style" onSubmit={handleSubmit}>
					{/* {errors.title && <span>{errors.title}</span>}  */}
					<h2>Add movies or series</h2>
					<br></br>

					<input className="inputTitle"
						placeholder="Title"
						type="text"
						name="title"
						value={movie.title}
						onChange={handleChange}
					/>

					{/* {errors.description && <span>{errors.description}</span>}  */}

					{/* <input
						placeholder="Description"
						type="text"
						name="description"
						value={movie.description}
						onChange={handleChange}
					/> */}

					<textarea
						placeholder="Description"
						type="text"
						name="description"
						value={movie.description}
						onChange={handleChange}
						cols="20"
						rows="5"
					></textarea>

					<div>
						{/* {errors.genre && <span>{errors.genre}</span>}  */}

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

					{/* <label>Upload image</label>
					<br></br>
					<input
						type="file"
						id="image"
						accept=".png, .jpeg, .jpg"
						onChange={checkImage(FileList)}
					></input> */}

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
			<h1>Latest Upload </h1>

			<div className="three-latest">
				<div>{latestList}</div>
			</div>
			
		</div>
	);
};

export default Form;

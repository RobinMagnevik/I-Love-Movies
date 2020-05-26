import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "../cssFolder/form.css";

const Form = () => {
	const dispatch = useDispatch();
	const [broadcastMsg, setBroadcastMsg] = useState("");
	const data = useSelector((state) => state.addFavoriteList);
	const latestList = data.slice(-3).map((item) => (
		<div className="threeLatestDiv" key={item.film.id}>
			<h3 className="threeLatestTitle">{item.film.title} ({item.film.year})</h3>
			<p className="threeLatestGenre">{item.film.genre}</p>
			<img className="threeLatestPoster" src={item.film.poster} alt="" />
			<p className="threeLatestDescription">{item.film.description}</p>
			<p className="threeLatestRating">Rating: {item.film.rating} </p>
		</div>
	));

	const [movie, setMovie] = useState({
		id: uuidv4(),
		title: "",
		poster:
			"http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg",
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
		if (
			!movie.title ||
			!movie.description ||
			!movie.genre ||
			!movie.year ||
			!movie.ofType
		) {

			setBroadcastMsg("Please sir/madam! all fields are in need of filling!");
		} else if (
			movie.genre.trim("") ||
			movie.title.trim("") ||
			movie.description.trim("") ||
			movie.year.trim("") ||
			movie.ofType.trim("")
		) {
			setBroadcastMsg("Item has been successfully added!");
			setMovie(
				{
					id: uuidv4(),
					title: "",
					poster:
						"http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg",
					description: "",
					genre: "",
					ofType: "",
					year: "",
				}
			);
			dispatch(actions.addToMovieList(movie));
		}
	};


	const showImage = (event) => {
		let img = event.target.files[0];
		console.log('IMG: ', img)
		const reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onload = function () {
			const imgData = reader.result;
			setMovie(
				{ ...movie, poster: imgData}
			)
			console.log('movieOBJECT: ', imgData)
			console.log('MOVIE: ', movie)
		};
	};

	return (
		<div className="main-container">
			<div>
				<form className="form-style" onSubmit={handleSubmit}>
					{/* {errors.title && <span>{errors.title}</span>}  */}
					<h2 className="form-style-h2">Add movies or series</h2>
					<br></br>

					<input
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

					<div className="form-style-div-label">
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

					<label>Upload image</label>
					<br></br>
					<input
						type="file"
						id="image"
						accept=".png, .jpeg, .jpg"
						onChange={showImage}
					></input>
					<br />
					<button
						type="submit"
						onClick={handleSubmit}
						className="addFavoriteToListButton"
					>
						Add
					</button>
					<br></br>
					<span className="broadcast-message">{broadcastMsg}</span>
				</form>
			</div>
			<h1>Latest Upload </h1>

			<div className="three-latest">
				<div>{latestList[0]}</div>
				<div>{latestList[1]}</div>
				<div>{latestList[2]}</div>
			</div>
		</div>
	);
};

export default Form;

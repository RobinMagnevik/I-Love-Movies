import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "../cssFolder/form.css";

const Form = () => {
	const dispatch = useDispatch();
	const [broadcastError, setBroadcastError] = useState("");
	const [isOK, setIsOK] = useState(null);
	const [hasError, setHasError] = useState(null);
	const [isTitleTouched, setIsTitleTouched] = useState(false)
	const [isDescriptionTouched, setIsDescriptionTouched] = useState(false)
	const [isYearTouched, setIsYearTouched] = useState(false)
	const [isGenreTouched, setIsGenreTouched] = useState(false)
	const [isRatingTouched, setIsRatingTouched] = useState(false)
	const data = useSelector((state) => state.addFavoriteList);
	const latestList = data.slice(-3).map((item) => (
		<div className="threeLatestDiv" key={item.film.id}>
			<h3 className="threeLatestTitle">
				{item.film.title} ({item.film.year})
			</h3>
			<p className="threeLatestGenre">{item.film.genre}</p>
			<img className="threeLatestPoster" src={item.film.poster} alt="" />
			<p className="threeLatestDescription">{item.film.description}</p>
			<p className="threeLatestRating">
				<span className="fa">&#xf005;</span> {item.film.rating + '/10'}{" "}
			</p>
		</div>
	));

	const [movie, setMovie] = useState({
		id: uuidv4(),
		title: "",
		poster:
			"http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg",
		description: "",
		genre: '',
		ofType: '',
		year: "",
		rating: "",
	});

	const handleChange = (e) => {
		setMovie({
			...movie,
			[e.target.name]: e.target.value,
		});
		if(	!movie.title.trim('') ||
			!movie.description.trim('') ||
			!movie.genre.trim('') ||
			!movie.year.trim('') ||
			!movie.rating ||
			!movie.ofType){
				setBroadcastError("Tip: Field required")
			}
		
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!movie.title.trim('') ||
			!movie.description.trim('') ||
			!movie.genre.trim('') ||
			!movie.year.trim('') ||
			!movie.ofType.trim('') || 
			!movie.rating.trim('') ||
			movie.year.length > 4 ||
			movie.year.length < 4 ||
			movie.rating < 0 ||
			movie.rating > 10
			
		) {
			setIsOK(null)
			setHasError("Please sir/madam! all fields are in need of filling!");
		} 
		else {
			
			setBroadcastError('')
			setHasError(null)
			setIsOK("Item has been successfully added!");
			setMovie({
				id: uuidv4(),
				title: "",
				poster:
					"http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg",
				description: "",
				genre: "",
				ofType: "",
				year: "",
				rating: "",
			});
			dispatch(actions.addToMovieList(movie));
			document.getElementById('radio-movie').checked = false;
			document.getElementById('radio-serie').checked = false;
			document.getElementById('genre').selectedIndex = 0;
			setIsDescriptionTouched(false)
			setIsYearTouched(false)
			setIsGenreTouched(false)
		}
	};

	const showImage = (event) => {
		let img = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onload = function () {
			const imgData = reader.result;
			setMovie({ ...movie, poster: imgData });
		};
	};
	return (
		<div className="main-container">
			<div>
				<form className="form-style" onSubmit={handleSubmit}>
					<h2 className="form-style-h2">Add movies or series</h2>
					<br></br>
					<small
						className="title-error-message"
						style={
							!movie.title.trim("") && isTitleTouched ? { display: "block" } : { display: "none" }
						}
					>
						{broadcastError}
					</small>
					<input
						placeholder="Title"
						type="text"
						name="title"
						value={movie.title}
						onChange={handleChange}
						onBlur={() => setIsTitleTouched(true)}
					/>
					<small
						className="textarea-error-message"
						style={
							!movie.description.trim("") && isDescriptionTouched
								? { display: "block" }
								: { display: "none" }
						}
					>
						{broadcastError}
					</small>
					<textarea
						className="form-textarea"
						placeholder="Description"
						type="text"
						name="description"
						value={movie.description}
						onChange={handleChange}
						cols="20"
						rows="5"
						maxLength="180"
						onBlur={() => setIsDescriptionTouched(true)}
					></textarea>
						<small className='rating-error-message' style={movie.rating > 10 && isRatingTouched ? {display: 'block'} : {display: 'none'}}>Format: 1-10</small>
						<small className='rating-error-message' style={movie.rating < 0 && isRatingTouched ? {display: 'block'} : {display: 'none'}}>Format: 1-10</small>
						<input className="rating form-rating-input"
							placeholder="0-10"
							type="number"
							name="rating"
							value={movie.rating}
							onChange={handleChange}
							cols="10"
							rows="1"
							onBlur={() => setIsRatingTouched(true)}
						/>

					<div className="form-style-div-label">
						<small className='year-error-message' style={movie.year.length !== 4 && isYearTouched ? {display: 'block'} : {display: 'none'}}>Format: YYYY</small>
						<input
							className="form-year-input"
							maxLength="4"
							placeholder="Year"
							type="number"
							name="year"
							value={movie.year}
							onChange={handleChange}
							onBlur={() => setIsYearTouched(true)}
						/>
							<small
								className="genre-error-message"
								style={
									!movie.genre.trim("") && isGenreTouched
										? { display: "block" }
										: { display: "none" }
								}
							>
								{broadcastError}
							</small>
						<div className="genre-input-area">
							
							<label htmlFor="genre" className="genre-input-area">Genre: </label>
							<select name="genre" className="genre-input-area" id="genre" onChange={handleChange} onBlur={() => setIsGenreTouched(true)}>
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
								id='radio-movie'
								onChange={handleChange}
							/>
							<label htmlFor="Serie">Serie: </label>
							<input
								value="serie"
								type="radio"
								name="ofType"
								id='radio-serie'
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
					<span
						className="broadcast-message"
						style={isOK ? { color: "green" } : { color: "red" }}
					>
						{isOK} {hasError}
					</span>
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

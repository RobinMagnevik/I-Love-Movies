import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../features/addFavoriteList'

const Form = () => {
	const [movie, setMovie] = useState({ id: "", title: "", description: "",  genre: "" });
	const dispatch = useDispatch();

	const handleChange = e => {
		setMovie({
			...movie,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		if(movie.genre) {
			setMovie({ ...movie, title: ""}, { ...movie, description: ""}, { ...movie, genre: ""})
		}
		
	}

	const handleClick = () => dispatch(actions.addToMovieList(movie))


	return (
		<div>
		<form className="addFavoriteToListForm" onSubmit={handleSubmit}>
		
			<div>
			<label>Title: </label> 
			{/* {errors.title && <span>{errors.title}</span>}  */}
			<br />
			<input type="text" name="title" value={movie.title} onChange={handleChange}/> 
			</div>		
 
			<div>
			<label>Birth year: </label> 
			{/* {errors.description && <span>{errors.description}</span>}  */}
			<br />
			<input type="text" name="description" value={movie.description} onChange={handleChange}/>
			</div>	

			<div>
			<label>Eye color: </label> 
			{/* {errors.genre && <span>{errors.genre}</span>}  */}
			<br />
			<input type="text" name="genre" value={movie.genre} onChange={handleChange}/>	
			</div>

			<br/>
			<button type="submit" onClick={handleClick} className="addFavoriteToListButton" >Add</button>
		</form>
		</div>
	)
}


export default Form;
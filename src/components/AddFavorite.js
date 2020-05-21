import React, { useState }  from 'react';
import Form from './Form';
import "../cssFolder/form.css";


const AddFavorite = () => {

	const [movies, setMovies] = useState([])

	function addMovie(movie) {
		setMovies([movie, ...movies])
	}

	return (
		<div className="container">
			<div>
		<Form addMovie={addMovie}/> <br />
		</div>
		</div>
	)

}


export default AddFavorite;
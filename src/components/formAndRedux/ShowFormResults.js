import React, { useState }  from 'react';
import Form from './Form';
import './form.css'


const ShowFormResults = () => {

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


export default ShowFormResults;
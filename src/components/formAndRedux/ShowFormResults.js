import React, { useState }  from 'react';
import Form from './Form';


const ShowFormResults = () => {

	const [movies, setMovies] = useState([])

	function addMovie(movie) {
		setMovies([movie, ...movies])
	}

	return (
		<div>
	
		<Form addMovie={addMovie}/> <br />
	
		</div>
	)

}


export default ShowFormResults;
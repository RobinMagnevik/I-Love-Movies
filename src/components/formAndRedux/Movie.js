import React from "react";

function Movie({ movie }) {
	
  return (

    <div className="eachCategoryCustomAdd" key={movie.title}>
      <p>Title: {movie.title}</p>
	  <p>Description: {movie.description}</p>
	  <p>Genre: {movie.genre}</p>
	  <p>id: {Math.random() * (12345 - 54) + 54}</p>
	  <p>Through form component</p>
    </div>

  );
}

export default Movie;
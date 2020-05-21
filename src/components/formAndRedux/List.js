import React from "react";
import Movie from "./Movie";

function AddFavoriteList({ movies }) {
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}

export default AddFavoriteList;

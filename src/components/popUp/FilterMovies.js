import React, { useState } from "react";
import MoviePopUp from "./MoviePopUp";
import './FilterMovies.css';

const FilterMovies = () => {
  const [search, setSearch] = useState("");

  const movieArray = [
    {
      title: "Kill Bill",
      director: "Quentin Tarantino",
    },
    {
      title: "Spiderman",
      director: "Don't know",
    },
    {
      title: "Coming to America",
      director: "Don't know",
    },
  ];

  const movieList = movieArray.map((movie) => {
    if (search.length !== 0) {
      if (
        movie.title.toLowerCase().match(search.toLowerCase()) ||
        movie.director.toLowerCase().match(search.toLowerCase())
      ) {
        return (
          <div key={movie.title}>
            <p>Title: {movie.title} </p>
            <p>Director: {movie.director} </p>
            <span>
              <MoviePopUp movie={movie} key={movie.title}/>
            </span>
          </div>
        );
      } else {
        return null;
      }
    }

    return (
      <div key={movie.title}>
        <p>Title: {movie.title} </p>
        <p>Director: {movie.director} </p>
        <span>
		<MoviePopUp movie={movie} key={movie.title}/>
        </span>
      </div>
    );
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {movieList}
    </div>
  );
};
export default FilterMovies;

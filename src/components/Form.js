import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/addFavoriteList";
import "../cssFolder/form.css";

const Form = () => {
  const [movie, setMovie] = useState({
    id: "",
    title: "",
    description: "",
    genre: "",
    ofType: "",
    year: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.genre) {
      setMovie(
        { ...movie, title: "" },
        { ...movie, description: "" },
        { ...movie, genre: "" },
        { ...movie, year: "" },
        { ...movie, ofType: "" }
      );
    }
  };

  const handleClick = () => dispatch(actions.addToMovieList(movie));
  console.log(movie);

  return (
    <div className="add-title-container">
      <form className="addFavoriteToListForm" onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          {/* {errors.title && <span>{errors.title}</span>}  */}
          <br />
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description: </label>
          {/* {errors.description && <span>{errors.description}</span>}  */}
          <br />
          <input
            type="text"
            name="description"
            value={movie.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Year: </label>
          {/* {errors.genre && <span>{errors.genre}</span>}  */}
          <br />
          <input
            type="number"
            name="year"
            value={movie.year}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="genre">Genre: </label>
            <select name="genre" id="genre" onChange={handleChange}>
              <option value="action">action</option>
              <option value="anime">anime</option>
              <option value="dokumentärer">dokumentärer</option>
              <option value="draman">draman</option>
              <option value="historia">historia</option>
              <option value="klassiker">klassiker</option>
              <option value="komedier">komedier</option>
              <option value="musikaler">musikaler</option>
              <option value="romantic">romantik</option>
              <option value="sci-fi">sci-fi</option>
            </select>
          </div>
          <div>
            <label htmlFor="Movie">Movie: </label>
            <input
              checked={true}
              value="movie"
              type="radio"
              name="ofType"
              id="Movie"
              onChange={handleChange}
            />
            <label htmlFor="Serie">Serie: </label>
            <input
              value="serie"
              type="radio"
              name="ofType"
              id="Serie"
              onChange={handleChange}
            />
          </div>
        </div>

        <br />
        <button
          type="submit"
          onClick={handleClick}
          className="addFavoriteToListButton"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;

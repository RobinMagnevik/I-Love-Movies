import React, { useState } from "react";
import "../cssFolder/moviePopUp.css";
import FadeEffect from './FadeEffect'


const MoviePopUp = ({ item }) => {
const [show, setShow] = useState(false);

  return (
	  <div>
    <FadeEffect show={show}>
      <div className="popUpModal" onClick={() => setShow(show => !show)}>
        <div className="popUpDiv">
		<p className="popUpX" onClick={() => setShow(show => show)}> x </p>
          <img className="popUpImg" src={item.film.poster} alt="" />
          <h3 className="popUpTitleYear"> {item.film.title} ({item.film.year})</h3>
		  <p className="popUpAbout">{item.film.description}</p>
		  <p className="popUpGenre">{item.film.genre}</p>
		  <p className="popUpRating"> <span className="fa moviePopUp" >&#xf005;</span>{item.film.rating}</p>
        </div>
      </div> 
	</FadeEffect> 
	<button className="buttonsInFavoriteList" onClick={() => setShow(show => !show)}> Details </button>
	</div>
  );
};

export default MoviePopUp;


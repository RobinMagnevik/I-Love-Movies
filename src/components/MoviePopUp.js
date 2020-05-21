import React, { useState } from "react";
import './MoviePopUp.css';

const MoviePopUp = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div> {toggle &&
      <div
        className="popUpModal"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <div className="popUpDiv">
		<p className="popUpX" onClick={() => setToggle((toggle) => toggle)}>x</p>
          <div className="popUpImg"></div>
          <p className="popUpTitle"><span>SPIDERMAN</span></p>
		  <p className="popUpAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel orci iaculis odio pellentesque aliquam. Nam consectetur posuere odio, sit amet finibus leo pharetra ac.</p>
          <span className="popUpGenre">Action</span>
          <span className="popUpYear">2012</span>
		  <span className="popUpRating">Rating: 5</span>
        </div>
      </div> }
	  <br/>
	  <span className="popUpShowDetails" onClick={() => setToggle((toggle) => !toggle)}>Show details</span>
    </div>
  );
};

export default MoviePopUp;

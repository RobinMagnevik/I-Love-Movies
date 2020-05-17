import React, { useState } from "react";

const MoviePopUp = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div> {toggle &&
      <div
        className="popUpModal"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <div className="popUpDiv">
		<p className="popUpX" onClick={() => setToggle((toggle) => toggle)}>+</p>
          <div className="popUpImg"></div>
          <p className="popUpName"><span>Movie/Show name</span></p>
          <p className="popUpCharacters">Characters:</p>
          <p className="popUpRating">Rating: 5</p>
        </div>
      </div> }
	  <br/>
	  <span className="popUpShowDetails" onClick={() => setToggle((toggle) => !toggle)}>Show details</span>
    </div>
  );
};

export default MoviePopUp;

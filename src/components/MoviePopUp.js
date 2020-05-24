import React, { useState } from "react";
import "../cssFolder/moviePopUp.css";
import MoviePopUpEffect from './MoviePopUpEffect'

const MoviePopUp = ({ item }) => {
const [show, setShow] = useState(false);

  return (
	  <div>
    <MoviePopUpEffect show={show}>
      <div className="popUpModal" onClick={() => setShow(show => !show)}>
        <div className="popUpDiv">
		<p className="popUpX" onClick={() => setShow(show => show)}> x </p>
          <div className="popUpImg"></div>
          <p className="popUpTitle"><span> {item.film.title} </span></p>
		  <p className="popUpAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel orci iaculis odio pellentesque aliquam. Nam consectetur posuere odio, sit amet finibus leo pharetra ac.</p>
          <span className="popUpGenre">Action</span>
          <span className="popUpYear">2012</span>
		  <span className="popUpRating">Rating: 5</span>
        </div>
      </div> 
	  <br/>
	</MoviePopUpEffect> 
	<p className="popUpShowDetails" onClick={() => setShow(show => !show)}> 
		  {/* {show ? "hide" : "show"} */}
		  Show details
		</p>
		</div>
  );
};

export default MoviePopUp;


// import React, { useState } from "react";
// import "../cssFolder/moviePopUp.css";

// const MoviePopUp = ({ item }) => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div> {toggle &&
//       <div
//         className="popUpModal"
//         onClick={() => setToggle((toggle) => !toggle)}
//       >
//         <div className="popUpDiv">
// 		<p className="popUpX" onClick={() => setToggle((toggle) => toggle)}>x</p>
//           <div className="popUpImg"></div>
//           <p className="popUpTitle"><span>{item.film.title}</span></p>
// 		  <p className="popUpAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel orci iaculis odio pellentesque aliquam. Nam consectetur posuere odio, sit amet finibus leo pharetra ac.</p>
//           <span className="popUpGenre">Action</span>
//           <span className="popUpYear">2012</span>
// 		  <span className="popUpRating">Rating: 5</span>
//         </div>
//       </div> }
// 	  <br/>
// 	  <span className="popUpShowDetails" onClick={() => setToggle((toggle) => !toggle)}>Show details</span>
//     </div>
//   );
// };

// export default MoviePopUp;






























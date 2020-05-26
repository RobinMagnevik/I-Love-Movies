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
          <h2 className="popUpTitleYear"> {item.film.title} ({item.film.year})</h2>
		  <p className="popUpAbout">{item.film.description}</p>

		  <div className="popUpGenreOfTypeDiv">
		  <span className="popUpGenre">{item.film.genre}</span>
		  </div>

		  <span className="popUpRating">{item.film.rating}</span> 
		  
          
        </div>
      </div> 
	  <br/>
	</FadeEffect> 
	<button className="buttonsInFavoriteList" onClick={() => setShow(show => !show)}> 
		  {/* {show ? "hide" : "show"} */}
		  Details
		</button>
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






























import React, { useState } from "react";
import './MoviePopUp.css';

const MoviePopUp = ({ item }) => {
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
          <p className="popUpTitle"><span>{item.film.title}</span></p>
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


// import React, { useState } from "react";
// import { useSpring, animated } from 'react-spring';
// import './MoviePopUp.css';

// const MoviePopUp = ({ movie }) => {
// const [toggle, setToggle] = useState(false);
//   const [fading, setFading] = useState(false);

// //   const fade = useSpring({
// // 	  opacity: fading ? 1 : 0
// //   })

// console.log("hej", movie)

//   return (
//     <div> 

//       <div 
//         className="popUpModal"
		
//       >
//         <div className="popUpDiv">
// 		{/* <p className="popUpX" onClick={() => {setFading(!fading); setToggle(!toggle)}}>x</p> */}
//           <div className="popUpImg"></div>
//           <p className="popUpTitle"><span> {movie.title} </span></p>
// 		  <p className="popUpAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel orci iaculis odio pellentesque aliquam. Nam consectetur posuere odio, sit amet finibus leo pharetra ac.</p>
//           <span className="popUpGenre">Action</span>
//           <span className="popUpYear">2012</span>
// 		  <span className="popUpRating">Rating: 5</span>
//         </div>
//       </div> 
	  
// 	  <br/>
// 	  <span className="popUpShowDetails" >Show details</span>
//     </div> 
//   );
// };

// export default MoviePopUp;































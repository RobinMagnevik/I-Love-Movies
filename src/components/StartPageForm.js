import React, { useState } from "react";
import "../cssFolder/startPageForm.css";


const StartPageForm = ({ addName }) => {
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleSubmit = (lsName) => {
	addName(title);
	setTitle([lsName, ...title]);
    localStorage.setItem("name", title);
  };

  const start = useState(() => {
	window.localStorage.getItem("name");
	if (localStorage.getItem("name") === null) {
	  return setToggle(true)
	} else return setToggle(false)
  })


  return (
    <div>
      {toggle && (
	<div className="startPageDiv">
      <div className="startPageInnerDiv">
	  <h1 className="header">I LOVE MOVIES</h1>
        <form >
		<p className="startPageWelcomePhrase"> Welcome, tell us who you are!</p>
          <input className="startPageInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
			<br />
			<button type="button" className="startPageWelcomeButton" value="add song" onClick={() => {setToggle((toggle) => !toggle); handleSubmit();}}> Sign in </button>
        </form>
		</div>
		</div>
      )}
    </div>
  );
};

export default StartPageForm;

// import React, { useState, useEffect } from "react";
// import "../cssFolder/startPage.css";

// const StartPage = () => {
//   const [toggle, setToggle] = useState(true);
//   const [name, setName] = useState("");

//   // useEffect(() => {
//   // 	localStorage.setItem("hej", JSON.stringify(name))
//   // }, (name))

//   function addName(lsName) {
//     setName([lsName, ...name]);
//     localStorage.setItem("name", name);
//   }

//   function checkStorage() {
//     if (localStorage.getItem("name") === null) {
//       return console.log("Empty");
//     } else console.log("Not empty");
//   }

//   useEffect(() => {
//     checkStorage();
//   });

//   return (
//     <div>
//       {/* {toggle && ( */}
//       <div className="startPageDiv">
//         <div className="startPageInnerDiv">
//           <p className="startPageWelcomePhrase">
//             Welcome, tell us who you are!
//           </p>
//           <input
//             className="startPageInput"
//             name={name}
//             value={name}
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />

//           <button
//             type="submit"
//             className="startPageWelcomeButton"
//             onClick={() => {
//               setToggle((toggle) => !toggle);
//               addName();
//             }}
//           >
//             Welcome!
//           </button>
//         </div>
//       </div>
//       {/* )} */}
//     </div>
//   );
// };

// export default StartPage;

// import React, { useState, useEffect } from "react";
// import "../cssFolder/startPage.css";

// const StartPage = () => {
//   const [toggle, setToggle] = useState(true);
//   const [name, setName] = useState({ title: "" });

//   const handleChange = (e) => {
//     setName({
//       ...name,
//       [e.target.name]: e.target.value,
//     });
//   };

//   function addName() {
//     if (name.title) {
//       setName({ ...name, title: "" });
//       localStorage.setItem("name", JSON.stringify(name));
//     }
//     console.log(name);
//   }

//   function checkStorage() {
//     if (localStorage.getItem(name) === null) {
//       return null;
//     } else return name;
//   }

//   useEffect(() => {
//     checkStorage();
//   });

//   return (
//     <div>
//       {/* {toggle && (  */}
//       <div className="startPageDiv">
//         <div className="startPageInnerDiv">
//           <p className="startPageWelcomePhrase">
//             Welcome, tell us who you are!
//           </p>

//             <input
//               className="startPageInput"
//               type="text"
//               name="title"
//               value={name.title}
//               onChange={handleChange}
//             />
//             <br />
//             <button
//               type="submit"
//               className="startPageWelcomeButton"
//               onClick={() => {
//                 setToggle((toggle) => !toggle);
//                 addName();
//               }}
//             >
//               Welcome!
//             </button>

//           <p>{name.title}</p>
//         </div>
//       </div>
//       {/* )} */}
//     </div>
//   );
// };

// export default StartPage;

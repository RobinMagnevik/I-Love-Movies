import React, { useState } from "react";
import "../cssFolder/startPageForm.css";
import FadeEffect from './FadeEffect'

const StartPageForm = ({ addName }) => {
  const [firstName, setfirstName] = useState("");
  const [show, setShow] = useState(false);



  const handleSubmit = (lsName) => {
	addName(firstName);
	setfirstName([lsName, ...firstName]);
	localStorage.setItem("name", firstName); 
	setfirstName("")
  };

  const start = useState(() => {
	window.localStorage.getItem("name");
	if (localStorage.getItem("name") === null) {
	  return setShow(true)
	} else return setShow(false)
  })

  return (
    <div>
<FadeEffect show={show}>
	<div className="startPageDiv">
      <div className="startPageInnerDiv">
	  <h1 className="header">I LOVE MOVIES</h1>
        <form className="startPageForm">
		<p className="startPageWelcomePhrase"> What’s kickin’, little chicken? Let us know your name!</p>
          <input className="startPageInput" type="text"  value={firstName} onChange={(e) => setfirstName(e.target.value)} />
            <br />
			<br />
			<button type="button" className="startPageWelcomeButton" value="add song" onClick={() => {setShow((show) => !show); handleSubmit();}}> Cluck </button>
        </form>
		</div>
		</div>
		</FadeEffect>
    </div>
  );
};

export default StartPageForm;

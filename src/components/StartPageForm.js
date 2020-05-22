import React, { useState } from "react";
import "../cssFolder/startPageForm.css";

const StartPageForm = ({ addName }) => {
  const [firstName, setfirstName] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleSubmit = (lsName) => {
	addName(firstName);
	setfirstName([lsName, ...firstName]);
    localStorage.setItem("name", firstName);
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
          <input className="startPageInput" type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
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

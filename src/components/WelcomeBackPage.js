import React, { useState } from 'react'
import "../cssFolder/startPageForm.css";

function WelcomeBackPage() {
	const [toggle, setToggle] = useState(true);

	const [localStorageName] = useState(() => {
		let localStorageName = window.localStorage.getItem("name");
		if (localStorage.getItem("name") === null) {
		  return setToggle(false)
		} else 
		return localStorageName 
	  })

	const notMe = () => {
		localStorage.clear("name");
	}

	return (
		<div>
		  {toggle && (
		<div className="startPageDiv">
		  <div className="startPageInnerDiv">
		  <h1 className="header">I LOVE MOVIES</h1>
			<form >
			<p className="startPageWelcomePhrase"> Welcome back {localStorageName}</p>
			<br />
				<button type="button" className="startPageWelcomeButton" onClick={() => setToggle((toggle) => !toggle)}> Thanks </button> <br /> <br />
				<button onClick={notMe}>Not me</button>
			</form>
			</div>
			</div>
		  )}
		</div>
	  );
	};

export default WelcomeBackPage;
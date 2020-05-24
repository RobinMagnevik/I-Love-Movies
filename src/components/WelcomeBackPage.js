import React, { useState } from 'react'
import "../cssFolder/startPageForm.css";
import FadeEffect from './FadeEffect'

function WelcomeBackPage() {
	const [show, setShow] = useState(true);

	const [localStorageName] = useState(() => {
		let localStorageName = window.localStorage.getItem("name");
		if (localStorage.getItem("name") === null) {
		  return setShow(false)
		} else 
		return localStorageName 
	  })

	const notMe = () => {
		localStorage.clear("name");
	}

	return (
		<div>
	<FadeEffect show={show}>
		<div className="startPageDiv">
		  <div className="startPageInnerDiv">
		  <h1 className="header">I LOVE MOVIES</h1>
			<form >
			<p className="startPageWelcomePhrase"> Welcome back {localStorageName}</p>
			<br />
				<button type="button" className="startPageWelcomeButton" onClick={() => setShow((show) => !show)}> Thanks </button> <br /> <br />
				<button className="startPageWelcomeButton" onClick={notMe}>Not me</button>
			</form>
			</div>
			</div>
			</FadeEffect>
		</div>
	  );
	};

export default WelcomeBackPage;
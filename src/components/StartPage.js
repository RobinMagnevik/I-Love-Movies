import React, { useState } from "react";
import StartPageForm from "./StartPageForm";
import "../cssFolder/startPageForm.css";

export default function StartPage() {
	const [names, setNames] = useState([]);

	const addName = (firstName) => {
		setNames([...names, { firstName }]);
	};

	return (
		<div >
			<div className="welcomeFirstHeaderTextDiv">
				{names.map((name) => {
					return (
						<p className="welcomeFirstHeaderText" key={name.firstName}>
						 Welcome {name.firstName}!
						</p>
					);
				})}
			</div>
			<StartPageForm addName={addName} />
		</div>
	);
}

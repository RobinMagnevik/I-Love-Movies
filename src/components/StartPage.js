import React, { useState } from "react";
import StartPageForm from "./StartPageForm";
import "../cssFolder/startPageForm.css";

export default function StartPage() {
  const [names, setNames] = useState([]);
  
  const addName = (title) => {
    setNames([...names, { title }]);
  };

  return (
    <div>
      <div>
        {names.map((name) => {
          return <p className="welcomeHeaderText" key={name.title}>{name.title}'s movie page!</p>;
        })}
      </div>
      <StartPageForm addName={addName} />

    </div>
  );
}

import React, { useState } from "react";
import StartPageForm from "./StartPageForm";
import "../cssFolder/startPageForm.css";

export default function StartPage() {
  const [names, setNames] = useState([]);
  
  const addName = (firstName) => {
    setNames([...names, { firstName }]);
  };

  return (
    <div>
      <div>
        {names.map((name) => {
          return <p className="welcomeHeaderText" key={name.firstName}>{name.firstName}'s movie page!</p>;
        })}
      </div>
      <StartPageForm addName={addName} />

    </div>
  );
}

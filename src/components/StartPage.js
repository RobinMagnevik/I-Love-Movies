import React, {
  useState,
  // useEffect
} from "react";
import "../cssFolder/startPage.css";

const StartPage = () => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("");

  // useEffect(() => {
  // 	localStorage.setItem("hej", JSON.stringify(name))
  // }, (name))

  function addName(lsName) {
    setName([lsName, ...name]);
    localStorage.setItem("name", name);
  }

  return (
    <div>
      {toggle && (
        <div className="startPageDiv">
          <div className="startPageInnerDiv">
            <p className="startPageWelcomePhrase">
              Welcome, tell us who you are!
            </p>

            <input
              className="startPageInput"
              name={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="startPageWelcomeButton"
              onClick={() => {
                setToggle((toggle) => !toggle);
                addName();
              }}
            >
              Welcome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage;

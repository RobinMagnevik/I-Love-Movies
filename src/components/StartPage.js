import React, {useState, useEffect} from "react";
import MoviePopUp from "./MoviePopUp";
import './startPage.css';

const StartPage = () => {
  const [toggle, setToggle] = useState(true);
	const [todos, setTodos] = useState("")

	useEffect(() => {
		localStorage.setItem("hej", JSON.stringify(todos))
	}, (todos))


	function addTodo(todo) {
		setTodos([todo, ...todos])
	}


  return (
    <div>
      {toggle && (
        <div className="startPageDiv">
		<div className="startPageInnerDiv">
		<p className="startPageWelcomePhrase">Welcome, tell us who you are!</p>
	
		<input className="startPageInput" todos={todos} type="text"/><br/>
		<button type="submit"
            className="startPageWelcomeButton"
            onClick={() => {setToggle((toggle) => !toggle); addTodo()}}
          >Welcome!</button>

		</div>
        </div>
      )}
	  {!toggle && (
	  <MoviePopUp />
	  )}
    </div>
  );
};

export default StartPage;

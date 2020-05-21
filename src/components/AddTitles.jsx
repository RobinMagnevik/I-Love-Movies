import React from "react";
import MoviesForm from "./MoviesForm";
import "../cssFolder/addTitles.css";

const AddTitles = () => {
  return (
    <div className="container">
      <div className="add-title-container">
        <MoviesForm />
      </div>
    </div>
  );
};

export default AddTitles;

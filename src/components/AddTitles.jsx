import React from 'react'
import MoviesForm from './MoviesForm'
import Header from './header/Header'
import '../cssFolder/addTitles.css'

const AddTitles = () => {
	return (
		<div className="container">
			<Header/>
			<div className="add-title-container">
				<MoviesForm/>
			</div>
		</div>
	)
}

export default AddTitles

import React from 'react'
import '../../cssFolder/header.css'

const Header = () => {
	return (
		<header>
			<h1>I love movies</h1>
			<nav className="nav-field">
				<button className="nav-button">
					Start
				</button>
				<button className="nav-button">
					Favoriter
				</button>
				<button className="nav-button">
					Inspiration
				</button>
			</nav>
		</header>
	)
}

export default Header

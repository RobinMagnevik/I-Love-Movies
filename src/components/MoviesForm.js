import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = v => {
	const errors = {}
	if (!v.movieTitle) {
		errors.movieTitle = '(Required)'
	} else if(v.movieTitle.length < 1){
		errors.movieTitle = 'Must be more than one (1) character'
	}
	if (!v.mainCharacter) {
		errors.mainCharacter = '(Required)'
	} else if(isNaN(Number(v.mainCharacter))){
		errors.mainCharacter = 'Cannot be a number'
	}
	return errors
}

const fields = ({input, label, type, checked, meta: { touched, error }}) => (
	<div>
		<label>{label}</label>{touched && (error && <span className="errorMessage">{error}</span>) }
		<div>
		<input {...input} placeholder={label} type={type} checked={checked} />  
		</div>
	</div>
)

const MoviesForm = ({handleSubmit, valid}) => (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name="movieTitle"  type="text" component={fields} label="Movie title" />

			</div>
			<div>
				<Field name="mainCharacter" type="text" component={fields} label="Main characrer(s)" />
				
			</div>
			<div>
				<label htmlFor="Movie">Movie: </label>
				<Field checked={true} value="movie" component={fields}  type="radio" name="ofType" id="Movie"/>
				<label htmlFor="Serie">Serie: </label>
				<Field value="serie" component={fields} type="radio" name="ofType" id="Serie"/>
			</div>
			<div>
				<label htmlFor="genres">Genres: </label>
				<Field component={fields} name="genres" id="genres">
					<option value="action">action</option>
					<option value="anime">anime</option>
					<option value="familj">familj</option>
					<option value="dokumentärer">dokumentärer</option>
					<option value="draman">draman</option>
					<option value="fredagsmys">fredagsmys</option>
					<option value="historia">historia</option>
					<option value="indie">indie</option>
					<option value="internationellt">internationellt</option>
					<option value="klassiker">klassiker</option>
					<option value="komedier">komedier</option>
					<option value="kriminalare">kriminalare</option>
					<option value="musikaler">musikaler</option>
					<option value="romantik">romantik</option>
					<option value="sci-fi">sci-fi</option>
					<option value="skräck">skräck</option>
					<option value="svenskt">svenskt</option>
				</Field>
		</div>
			<div>
				<button type="submit" disabled={!valid}>Submit</button>
			</div>
		</form>
	)


export default reduxForm({
	form: 'moviesFormValidation', 
	validate, 
})(MoviesForm)
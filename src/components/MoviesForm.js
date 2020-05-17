import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = v => {
  const errors = {}
  if (!v.movieTitle) {
    errors.movieTitle = '(Required)'
  } 
  if (!v.mainCharacter) {
    errors.mainCharacter = '(Required)'
  } 
  return errors
}

const fields = ({input, label, type, meta: { touched, error }}) => (
  <div>
    <label>{label}</label>{touched && (error && <span className="errorMessage">{error}</span>) }
    <div>
    <input {...input} placeholder={label} type={type} />  
    </div>
  </div>
)

const MoviesForm = ({handleSubmit, valid}) => (
    <form className="moviesForm" onSubmit={handleSubmit}>
      <Field name="movieTitle"  type="text" component={fields} label="Movie title" />
      <Field name="mainCharacter" type="text" component={fields} label="Main characrer(s)" />
      <div>
        <button type="submit" disabled={!valid}>Submit</button>
      </div>
    </form>
  )


export default reduxForm({
  form: 'moviesFormValidation', 
  validate, 
})(MoviesForm)
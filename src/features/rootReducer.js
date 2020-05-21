import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as addFavoriteListReducer } from './addFavoriteList'
import { reducer as InspoMovieReducer } from './InspoMovie'

const rootReducer = combineReducers({
	form: formReducer,
	addFavoriteList: addFavoriteListReducer,
  inspoMovie: InspoMovieReducer
})

export { rootReducer } 
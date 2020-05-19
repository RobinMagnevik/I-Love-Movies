import { combineReducers } from 'redux';
import { reducer as InspoMovieReducer } from './InspoMovie'

const rootReducer = combineReducers({
	inspoMovie: InspoMovieReducer
})

export { rootReducer } 
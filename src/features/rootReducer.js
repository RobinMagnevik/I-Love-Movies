import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as addFavoriteListReducer } from './addFavoriteList'

const rootReducer = combineReducers({
	form: formReducer,
	addFavoriteList: addFavoriteListReducer,
})

export { rootReducer } 
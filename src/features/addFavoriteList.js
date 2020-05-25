import { createAction, createReducer } from "@reduxjs/toolkit";

const addToMovieList = createAction("add to movielist");
const removeFromMovieList = createAction("remove from movielist");
const updateMovieList = createAction("remove from movielist");

const actions = { addToMovieList, removeFromMovieList, updateMovieList };

const initialState = [
  {
  	film: { title: 'Spiderman', description: 'bla bla bla', genre: 'action', releaseYear: '2012', rating: '5,5', ofType: "movie"  },
  }
];

const reducer = createReducer(initialState, {
  [addToMovieList]: (state, action) => {
    let found = state.find(
      (movieItem) => movieItem.film.title === action.payload.title
    );
    if (found) {
      return state.map((movieItem) => {
        if (movieItem.film.title === action.payload.title) {
          return { ...movieItem };
        } else {
          return movieItem;
        }
      });
    } else {
      return [...state, { film: action.payload }];
    }
  },

  [updateMovieList]: (state, action) => state.map((movieItem, index) => {
    if( movieItem.film.title === action.payload.title ) {
        return action.payload;
    } else {
        return movieItem
    }
    // Alternativ: return (character.id === action.payload.id) ? action.payload : character
}),

  [removeFromMovieList]: (state, action) =>
    state.filter((movieItem) => movieItem.film.title !== action.payload),
});

export { actions, reducer };
import { createAction, createReducer } from '@reduxjs/toolkit';

const isFetching = createAction('is fetching');
const success = createAction('success');
const failure = createAction('failure');
const inspoActions = { isFetching, success, failure };


const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}
const initialState = {
    status: STATUS.NORMAL,
    movie: null
}

const reducer = createReducer(initialState, {
    [isFetching]: (state, inspoActions) => ({
        ...state,
        status: STATUS.FETCHING
    }),
    [success]: (state, inspoActions) => ({
        status: STATUS.SUCCESS,
        movie: inspoActions.payload
    }),
    [failure]: (state, inspoActions) => ({
        ...state,
        status: STATUS.FAILURE
    })
})


export { inspoActions, reducer, STATUS };
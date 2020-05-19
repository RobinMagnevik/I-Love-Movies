  
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../features/InspoMovie';




const Inspiration = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.inspoMovie.status);
    const movie = useSelector(state => state.inspoMovie.movie);

    let content = null;
    
    if( status === STATUS.NORMAL ) {
        content = 'Ready to get some suggestions!';
    } else if( status === STATUS.FETCHING ) {
        content = 'Waiting for data...';
    } else if( status === STATUS.SUCCESS ) {
        content = movie;
        console.log('movie is:', movie);
    } else {
        content = 'Something went wrong. Could not retrieve movie.';
    }

    useEffect(() => {
        fetchMovie(dispatch);
    }, [dispatch]);

    return (
        <div>
            <p>
            <button onClick={() => fetchMovie(dispatch)}> Get new suggestion! </button>
            </p>
            <img src={content} />
        </div>
    )
}


let movieList = ['Batman', 'Superman', 'Spider-man'];

async function fetchMovie(dispatch) {
    let randomNumber = Math.floor((Math.random() * movieList.length -1) + 1);
    let randomMovie = movieList[randomNumber];

    dispatch(actions.isFetching());
    const url = 'http://www.omdbapi.com/?apikey=5e49bc8e&t=' + encodeURI(randomMovie);
    console.log('url: ' + url)
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log('Got data:', json);
        let movieSuggestion = json.Poster;
        console.log('keep: '+ movieSuggestion);
        dispatch(actions.success(movieSuggestion));
    } catch {
        dispatch(actions.failure());
    }
}




export default Inspiration;

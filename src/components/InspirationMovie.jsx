import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../features/InspoMovie';
import '../cssFolder/inspirationMovie.css'


const Inspiration = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.inspoMovie.status);
    const movie = useSelector(state => state.inspoMovie.movie);

    let content = {};
    
    if( status === STATUS.NORMAL ) {
        content.title = 'Ready to get some suggestions!';
    } else if( status === STATUS.FETCHING ) {
        content.title = 'Waiting for data...';
    } else if( status === STATUS.SUCCESS ) {
        content = movie;
        console.log('movie is:', movie);
    }
     else {
        content.title = 'Something went wrong. Could not retrieve movie.';
    }

    useEffect(() => {
        fetchMovie(dispatch);
    }, [dispatch]);

    return (
        <div className="inspoContainer">
            <div>
                <button className="movieButton" onClick={() => fetchMovie(dispatch)}> Get movie suggestion! </button>
                <button className="serieButton" onClick={() => fetchSerie(dispatch)}> Get serie suggestion! </button>
            </div>
            <h2 id="contentTitle">{content.title} ({content.year})</h2>
            <div className="movieInfo">
                <p>{content.genre}</p>
                <img className="contentPoster" src={content.poster} alt="" />
                <p>{content.plot}</p>
                <p>Rating: {content.rating}</p>
            </div>
            <div>
                <button className="addButton" >Add to favorites!</button>
            </div>
        </div>
    )
}

let movieList = ['The Godfather', 'The Shawshank Redemption', 'The Godfather: Part II', 'The Dark Knight', '12 Angry Men', "Schindler's List", 'The Lord of the Rings: The Return of the King', 'Pulp Fiction', 'The Lord of the Rings: The Fellowship of the Ring', 'Fight Club', 'Forrest Gump', 'Inception', 'Star Wars: Episode V - The Empire Strikes Back', 'The Lord of the Rings: The Two Towers', 'The Matrix', 'Goodfellas', 'Se7en'];

let serieList = ['Game of Thrones', 'Vikings', 'Breaking Bad', 'Band of Brothers', 'Chernobyl', 'The Wire', 'Rick and Morty', 'Sherlock', 'True Detective', 'Death Note', 'Fargo', 'The Office', 'Friends', 'Seinfeld']

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
        let movieSuggestion = {
            title: json.Title,
            poster: json.Poster,
            genre: json.Genre,
            year: json.Year.substring(0,4),
            plot: json.Plot,
            rating: json.Ratings[0].Value
        };
        console.log('keep: '+ movieSuggestion);
        dispatch(actions.success(movieSuggestion));
    } catch {
        dispatch(actions.failure());
    }
}
async function fetchSerie(dispatch) {
    let randomNumber = Math.floor((Math.random() * serieList.length -1) + 1);
    let randomSerie = serieList[randomNumber];

    dispatch(actions.isFetching());
    const url = 'http://www.omdbapi.com/?apikey=5e49bc8e&t=' + encodeURI(randomSerie);
    console.log('url: ' + url)
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log('Got data:', json);
        let serieSuggestion = {
            title: json.Title,
            poster: json.Poster,
            genre: json.Genre,
            year: json.Year.substring(0,4),
            plot: json.Plot,
            rating: json.Ratings[0].Value
        };
        console.log('keep: '+ serieSuggestion);
        if(json.Response === 'False') {
            dispatch(actions.failure())
        } else {
        dispatch(actions.success(serieSuggestion));
        }
    } 
    catch {
        dispatch(actions.failure());
    }
}



export default Inspiration;
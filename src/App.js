import './App.css';
import { useState } from 'react';
import Search from './components/search';
import DisplayMovie from './components/display_movie';
import FavoriteMovies from './components/favorite_movies';
import MovieRatings from './components/movie_ratings';

function App() {

  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([])
  console.log({searchedMovie});

  return (
    <div className="App">
      <Search setSearchedMovie={setSearchedMovie}/>
      <DisplayMovie searchedMovie={searchedMovie} movieArray={movieArray} setMovieArray={setMovieArray}/>
      <MovieRatings searchedMovie={searchedMovie}/>
      <FavoriteMovies movieArray={movieArray}/>
    </div>
  );
}

export default App;

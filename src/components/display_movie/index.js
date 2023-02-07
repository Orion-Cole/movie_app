import React from 'react'

const DisplayMovie = (props) => {
  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "FROM DISPLAY_MOVIE");


  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div>
           <h3>MOVIE DISPLAY</h3>
            <h4>{searchedMovie.Title}</h4>
            <p>{searchedMovie.Plot}</p>
            <img src={searchedMovie.Poster}></img>
        </div>
      )
    } else {
      return (
        <div>
          waiting for movie...
        </div>
      )
    }
  }

  const handleClick = () => {
    console.log('clicked');
    if (!movieArray.includes(searchedMovie.Title)) {
      setMovieArray([...movieArray, searchedMovie.Title])
    }
    
  }

  return (
    <section style={{borderBottom: "4px solid black"}}
    onClick={() => handleClick()}
    >
      { returnMovieJSX() }
    </section>
  )
}

export default DisplayMovie
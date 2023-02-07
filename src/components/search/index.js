import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Search = (props) => {
    let { setSearchedMovie } = props

    let isFirstRender = useRef(true);

    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        //make this movie call randommly choose between 10 movies
        if (isFirstRender.current === true) {
            let num = Math.floor(Math.random() * (9 - 0 + 1)) + 0; //num between 0-9
            console.log(num);
            const movieList = [
                "Pacific Rim",
                "Titanic",
                "Blazing Saddles",
                "Young Frankenstein",
                "Total Recall",
                "Django Unchained",
                "The Mask",
                "Gravity",
                "Knives Out",
                "Clue"
            ]
            const randomMovie = movieList[num];
            console.log(randomMovie, "random movie");
            isFirstRender.current = false;
            makeServerCall(randomMovie)
        } else {

        }
      
    }, [])

    //listen for submit and make call to server
  

    const handleChange = (e)  => {
        console.dir(e.target.value); //What the element value would be after the change
        let newValue = e.target.value;
        //was t
        // e.target.value is th
        setSearchString(newValue)
    }

    const makeServerCall = async (string) => {
        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${string}`
        });
        console.log(serverResponse);
        setSearchString('');
        setSearchedMovie(serverResponse.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if we don't prevent the default, the page will refresh
        console.log('Submitting!');
        //call express server with the string
        makeServerCall(searchString)
        
    };

  return (
    <section style={{borderBottom: "4px solid black", marginBottom:"20px", paddingBottom:"12px"}}>
        <h3>Search for a movie!</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="movie-search">Type the name of the movie you want to see!</label>
            <input 
                type="search" 
                name="movie-search" 
                value={searchString} //state locked to searchString
                placeholder="movie name" 
                onChange={(event)=> handleChange(event)} //state changed
            />
            
            <button type=''>Submit</button>
        </form>
    </section>
  )
}

export default Search
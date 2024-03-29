import React, { useEffect, useState } from "react";
import Movie from "./Movie";
// import Header from "../components/Header";x
import { Grid } from "@mui/material";
import Search from "./Search";
import Sidebar from './sidebar';
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours



const Movies = (props) => {
  debugger



const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

  return (
    <div className="hello">
    <Grid container columnSpacing = {2} spacing={10} xs={12} md={12} >
      <Grid item xs={12} md={3}>
      <Sidebar/>
     </Grid>
     <Grid item xs={12} md={8}>
     <Search search={search} />
         <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
           {loading && !errorMessage ? (
           <span>loading...</span>
           ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
     </div>
     </Grid>
     </Grid>
     </div>
      
        
    );
};

export default Movies;



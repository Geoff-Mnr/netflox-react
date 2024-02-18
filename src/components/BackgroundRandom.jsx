import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BackgroundRandom() {

  const [movies, setMovies] = useState(null);


  useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;
    axios.get(url)
      .then(response => {
        const movies = response.data.results;
        if (movies.length) {
          const randomIndex = Math.floor(Math.random() * Math.min(movies.length, 40));
          setMovies(movies[randomIndex]);
        }
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className="w-full pt-16">
      {movies && (
        <img
          className="w-full h-[90vh] object-cover"
          src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
          alt={movies.title}
        />
      )}
    </div>
  );
};

export default BackgroundRandom;
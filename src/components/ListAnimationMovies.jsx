import React, { useEffect, useState } from "react";
import axios from "axios";

const ListAnimationMovies = () => {
  const [movies, setMovies] = useState([]);

  const handleMovieClick = (event, movieId) => {
    event.preventDefault();
    console.log(movieId);
  }

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`;
    axios.get(url).then((response) => {
      const movies = response.data.results;
      if (movies.length) {
        setMovies(movies);
      }
    });
  }
    , []);

  return (
    <div className=' p-6'>
      <h2 className='text-white mb-2 text-lg font-semibold'>Animation</h2>
      <ul className='flex'>
        {movies.slice(0, 6).map((movie, index) => (
          <li key={index} className={`mr-4 last:mr-0`}>
            <a href={`/movie/${movie.id}`} onClick={(event) => handleMovieClick(event, movie.id)} >
              <img
                className="rounded-sm"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>

  );

};

export default ListAnimationMovies;
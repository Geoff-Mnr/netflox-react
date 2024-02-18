import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function SearchMoviesInput() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${search}`;
    axios.get(url)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log(error));
  }, [search]);

  return (
    <div className="search-container relative inline-block">
      <input
        type="text"
        placeholder="Film, série, acteur..."
        className="bg-black bg-opacity-70 border-2 border-gray-200 text-base rounded-sm text-gray-200 p-2 mr-4"
        onChange={event => setSearch(event.target.value)}
      />
      <ul className="search-result list-none p-0 m-0 absolute bg-black bg-opacity-70 z-10 w-full left-0 top-full mt-px">
        {movies.slice(0, 5).map((movie) => (
          <li key={movie.id} className="p-2 cursor-pointer flex hover:bg-gray-200 hover:opacity-90 hover:text-black text-gray-200">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-12 h-16 mr-2.5" />
            <span className="font-semibold text-xs ">{movie.title}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}


export default SearchMoviesInput;
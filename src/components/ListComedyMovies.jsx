import axios from "axios";
import { useEffect, useState } from "react";

const SetComedyMovies = () => {

  const [movies, SetComedyMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
    axios.get(url)
      .then(response => {
        const movies = response.data.results;
        if (movies.length) {
          SetComedyMovies(movies);
        }
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <div className=' p-6'>
      <h2 className='text-white mb-2 text-lg font-semibold'>Comédie</h2>
      <ul className='flex'>
        {movies.slice(0, 6).map((movie, index) => (
          <li key={index} className={`mr-4 last:mr-0`}>
            <img
              className="rounded-sm"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>

  );

};

export default SetComedyMovies;
import { useEffect, useState } from 'react';
import axios from 'axios';

const SetNewMovies = () => {
  const [movies, setMovies] = useState([]);

  const handleMovieClick = (event, movieId) => {
    event.preventDefault(); // A enlever pour voir le comportement par défaut
    console.log(movieId);
  }

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KEY_API;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;
    axios.get(url)
      .then(response => {
        const movies = response.data.results;
        if (movies.length) {
          setMovies(movies);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='p-6'>
      <h2 className='text-white mb-2 text-lg font-semibold'>Nouvauté</h2>
      <ul className='flex'>
        {movies.slice(0, 6).map((movie) => (
          <li key={movie.id} className='mr-4 last:mr-0'>
            <a href={`/movie/${movie.id}`} onClick={(event) => handleMovieClick(event, movie.id)}>
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

export default SetNewMovies;

import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ca4729b6b0abadaf808f61880cf58c37');
    const data = await response.json();
    setMovies(data.results);
  }

  console.log(movies);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {movies && movies.map((movie) => {
            return <List movies={movies} />
          }
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;


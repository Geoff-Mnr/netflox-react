import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ca4729b6b0abadaf808f61880cf58c37');
            const data = await response.json();
            setGenres(data.genres);
        };

        const fetchMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ca4729b6b0abadaf808f61880cf58c37');
            const data = await response.json();
            setMovies(data.results);
        };

        fetchGenres();
        fetchMovies();
    }, []);

    return (
        <>
            <div className="Movies">
                <header className=" flex justify-center">
                    <ul className="w-1/2">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} genres={genres} />
                        ))}
                    </ul>
                </header>
            </div>

        </>

    );
}

export default Movies;

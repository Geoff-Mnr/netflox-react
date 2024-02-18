import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Movies() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [slice, setSlice] = useState(10);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_KEY_API;
        const url = search
            ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${search}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;

        axios.get(url)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => console.log(error));
    }, [search]);

    return (
        <>
            <Navbar />
            <div className="w-full h-auto bg-black text-white flex flex-col items-center pt-20">
                <input
                    type="text"
                    placeholder="Rechercher un film"
                    className="bg-zinc-800 p-2 rounded-lg m-5 w-3/4 text-slate-200"
                    onChange={event => setSearch(event.target.value)}
                />
                <h1 className="text-3xl font-semibold text-zinc-800">Films</h1>
                <ul className="w-1/2">
                    {movies.slice(0, slice).map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </ul>

                <button onClick={() => setSlice(slice + 10)} className="bg-zinc-800 text-white p-3 rounded-lg m-5">Afficher +</button>
            </div>
        </>

    );
}

export default Movies;

import React from "react";



const Card = ({ movie, genres }) => {
    return (
        <li className="bg-zinc-800 m-5 rounded-lg p-3">
            <div className="movie flex">
                <div class="w-1/3">
                    <img className="w-80" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>

                <div className="w-2/3 ml-3">
                    <h2 className="text-lg text-slate-200 font-semibold">{movie.title}</h2>
                    <h3>{movie.release_date}</h3>
                    <h3>{movie.vote_average}</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;

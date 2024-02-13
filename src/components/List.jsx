import React from "react";

const List = ({ movies }) => {
    return (
        <li>
            {movies && movies.map((movie) => (
                <div key={movie.id} className="movie">
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
            ))}

        </li>

    );
}

export default List;
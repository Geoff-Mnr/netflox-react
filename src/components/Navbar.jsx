import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import SearchMoviesInput from "./SearchMoviesInput";

const Navbar = () => {

    return (
        <header className="w-full">
            <nav className="w-full bg-black  p-4 flex items-center justify-between h-1/12 z-10 fixed">
                <div className="menu w-1/4 flex justify-between items-center">
                    <Logo className="w-28" />
                    <ul className="flex text-white text-base">
                        <li><NavLink to="/" className="p-3 hover:font-semibold">Accueil</NavLink></li>
                        <li><NavLink to="/movies" className="p-3 hover:font-semibold">Films</NavLink></li>
                    </ul>
                </div>
                <div>
                    <SearchMoviesInput />
                </div>

            </nav>

        </header>
    );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    

    return (
        <header className="w-full">
            <nav className="w-full bg-zinc-800 p-4 flex items-center justify-between h-1/12">
                <div className="menu w-1/4 flex justify-between items-center">
                    <ul className="flex text-white text-base">
                        <li><NavLink to="/" className="p-3 hover:font-semibold">Accueil</NavLink></li>
                        <li><NavLink to="/movies" className="p-3 hover:font-semibold">Films</NavLink></li>
                    </ul>
                </div>   
            </nav>
        </header>
    );
};

export default Navbar;

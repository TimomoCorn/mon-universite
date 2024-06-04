import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="bg-gray-800">
            <ul className="flex">
                <li className="mr-6">
                    <Link to="/" className="text-white hover:text-gray-300">Accueil</Link>
                </li>
                <li className="mr-6">
                    <Link to="/etudiants" className="text-white hover:text-gray-300">Etudiants</Link>
                </li>
                <li className="mr-6">
                    <Link to="/enseignants" className="text-white hover:text-gray-300">Enseignants</Link>
                </li>
                <li className="mr-6">
                    <Link to="/matiere" className="text-white hover:text-gray-300">Matière</Link>
                </li>
                <li>
                    <Link to="/note" className="text-white hover:text-gray-300">Note</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

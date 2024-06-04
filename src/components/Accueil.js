import React from 'react';

const Accueil = () => {
    return (
        <div className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Description de l'université</h1>
            <p className="mt-2">Voici une description de notre université.</p>
            <img src="logo.png" alt="Logo de l'université" className="mt-4" />
            <p className="mt-4">Email: contact@universite.com</p>
            <p>Téléphone: 1234567890</p>
            <p>Fax: 0987654321</p>
            <ul className="mt-4">
                <li><a href="/etudiants" className="text-blue-200 hover:text-white">Etudiants</a></li>
                <li><a href="/enseignants" className="text-blue-200 hover:text-white">Enseignants</a></li>
                <li><a href="/matieres" className="text-blue-200 hover:text-white">Matières</a></li>
                <li><a href="/notes" className="text-blue-200 hover:text-white">Notes</a></li>
            </ul>
        </div>
    );
}

export default Accueil;

// Permet d’afficher Numéro Etudiant, Nom, Prénom, date de naissance
// Ces information s’affiche sous forme d’un tableau et on peut éditer, modifier, supprimer

import { getAll, add, update, remove } from "../services/operationEtuds";
import React, { Component } from 'react';

export class ListEtuds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Etuds: [],
            NumEtudiant: "",
            Nom: "",
            Prénom: "",
            DatenET: "",
        };
    }

    componentDidMount() {
        this.getEtudiants();
    }

    getEtudiants = () => {
        getAll((res) => {
            this.setState({
                Etuds: res.data,
            });
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        add(
            {
                NumEtudiant: this.state.NumEtudiant,
                Nom: this.state.Nom,
                Prénom: this.state.Prénom,
                DatenET: this.state.DatenET,
            },
            (res) => {
                if (res.status === 200) {
                    this.getEtudiants();
                }
            }
        );
    };

    handleUpdate = (id) => {
        update(
            id,
            {
                NumEtudiant: this.state.NumEtudiant,
                Nom: this.state.Nom,
                Prénom: this.state.Prénom,
                DatenET: this.state.DatenET,
            },
            (res) => {
                if (res.status === 200) {
                    this.getEtudiants();
                }
            }
        );
    };

    handleDelete = (id) => {
        remove(id, (res) => {
            if (res.status === 200) {
                this.getEtudiants();
            }
        });
    };

    render() {
        return (
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Liste des étudiants</h1>
                <form onSubmit={this.handleSubmit} className="mb-4">
                    <label className="block mb-2">
                        Numéro d'étudiant:
                        <input
                            type="text"
                            name="NumEtudiant"
                            value={this.state.NumEtudiant}
                            onChange={this.handleChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </label>
                    <label className="block mb-2">
                        Nom:
                        <input
                            type="text"
                            name="Nom"
                            value={this.state.Nom}
                            onChange={this.handleChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </label>
                    <label className="block mb-2">
                        Prénom:
                        <input
                            type="text"
                            name="Prénom"
                            value={this.state.Prénom}
                            onChange={this.handleChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </label>
                    <label className="block mb-2">
                        Date de naissance:
                        <input
                            type="text"
                            name="DatenET"
                            value={this.state.DatenET}
                            onChange={this.handleChange}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </label>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Ajouter</button>
                </form>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-gray-300 py-2">Numéro d'étudiant</th>
                            <th className="border-b-2 border-gray-300 py-2">Nom</th>
                            <th className="border-b-2 border-gray-300 py-2">Prénom</th>
                            <th className="border-b-2 border-gray-300 py-2">Date de naissance</th>
                            <th className="border-b-2 border-gray-300 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Etuds.map((etud) => (
                            <tr key={etud._id}>
                                <td className="border-b border-gray-300 py-2">{etud.NumEtudiant}</td>
                                <td className="border-b border-gray-300 py-2">{etud.Nom}</td>
                                <td className="border-b border-gray-300 py-2">{etud.Prénom}</td>
                                <td className="border-b border-gray-300 py-2">{etud.DatenET}</td>
                                <td className="border-b border-gray-300 py-2">
                                    <button
                                        onClick={() => {
                                            this.handleUpdate(etud._id);
                                        }}
                                        className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        onClick={() => {
                                            this.handleDelete(etud._id);
                                        }}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListEtuds;
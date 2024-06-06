// Créer un composant "Matiere" permettant d’afficher Code Matière, Libellé Matière, Coefficient Matière ..
// Ces information s’affiche sous forme d’un tableau et on peut éditer, modifier, supprimer.

import { getAll, add, update, remove } from "../services/operationMatieres";
import React, { Component } from 'react';

export class ListMatieres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Matieres: [],
            CodeMat: "",
            LibelleMat: "",
            CoeffMat: "",
        };
    }

    componentDidMount() {
        this.getMatieres();
    }

    getMatieres = () => {
        getAll((res) => {
            this.setState({
                Matieres: res.data,
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
                CodeMat: this.state.CodeMat,
                LibelleMat: this.state.LibelleMat,
                CoeffMat: this.state.CoeffMat,
            },
            (res) => {
                if (res.status === 200) {
                    this.getMatieres();
                }
            }
        );
    };

    handleUpdate = (id) => {
        update(
            id,
            {
                CodeMat: this.state.CodeMat,
                LibelleMat: this.state.LibelleMat,
                CoeffMat: this.state.CoeffMat,
            },
            (res) => {
                if (res.status === 200) {
                    this.getMatieres();
                }
            }
        );
    };

    handleDelete = (id) => {
        remove(id, (res) => {
            if (res.status === 200) {
                this.getMatieres();
            }
        });
    };

    render() {
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">Liste des Matières</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Code Matière</th>
                            <th className="px-4 py-2">Libellé Matière</th>
                            <th className="px-4 py-2">Coefficient Matière</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Matieres.map((matiere) => (
                            <tr key={matiere._id}>
                                <td className="px-4 py-2">{matiere.CodeMat}</td>
                                <td className="px-4 py-2">{matiere.LibelleMat}</td>
                                <td className="px-4 py-2">{matiere.CoeffMat}</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => this.handleUpdate(matiere._id)}>Modifier</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleDelete(matiere._id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <label className="block mb-2">
                        Code Matière:
                        <input
                            type="text"
                            name="CodeMat"
                            value={this.state.CodeMat}
                            onChange={this.handleChange}
                            className="border border-gray-300 px-2 py-1 rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Libellé Matière:
                        <input
                            type="text"
                            name="LibelleMat"
                            value={this.state.LibelleMat}
                            onChange={this.handleChange}
                            className="border border-gray-300 px-2 py-1 rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Coefficient Matière:
                        <input
                            type="text"
                            name="CoeffMat"
                            value={this.state.CoeffMat}
                            onChange={this.handleChange}
                            className="border border-gray-300 px-2 py-1 rounded"
                        />
                    </label>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
                </form>
            </div>
        );
    }
}


export default ListMatieres;
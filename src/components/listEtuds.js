// Réaliser le CRUD complet pour les étudiants.

import { get, add, update, remove } from "../../services/operationEtuds";
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
            id: "",
        };
    }

    componentDidMount() {
        this.getEtudiants();
    }

    getEtudiants = () => {
        get((res) => {
            this.setState({
                Etuds: res.data,
            });
        });
    };

    handleAdd = () => {
        const etud = {
            NumEtudiant: this.state.NumEtudiant,
            Nom: this.state.Nom,
            Prénom: this.state.Prénom,
            DatenET: this.state.DatenET,
        };
        add(etud, (res) => {
            this.getEtudiants();
        });
    };

    handleUpdate = () => {
        const etud = {
            NumEtudiant: this.state.NumEtudiant,
            Nom: this.state.Nom,
            Prénom: this.state.Prénom,
            DatenET: this.state.DatenET,
        };
        update(this.state.id, etud, (res) => {
            this.getEtudiants();
        });
    };

    handleDelete = (id) => {
        remove(id, (res) => {
            this.getEtudiants();
        });
    };

    render() {
        return (
            <div>
                <h1>Étudiants</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Numéro</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Date de naissance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Etuds.map((etud) => (
                            <tr key={etud._id}>
                                <td>{etud.NumEtudiant}</td>
                                <td>{etud.Nom}</td>
                                <td>{etud.Prénom}</td>
                                <td>{etud.DatenET}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(etud._id)}>Supprimer</button>
                                    <button onClick={() => this.handleUpdate(etud._id)}>Modifier</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Ajouter un étudiant</h2>
                <input type="text" placeholder="Numéro" onChange={(e) => this.setState({ NumEtudiant: e.target.value })}
                />
                <input type="text" placeholder="Nom" onChange={(e) => this.setState({ Nom: e.target.value })}
                />
                <input type="text" placeholder="Prénom" onChange={(e) => this.setState({ Prénom: e.target.value })}
                />
                <input type="text" placeholder="Date de naissance" onChange={(e) => this.setState({ DatenET: e.target.value })}
                />
                <button onClick={this.handleAdd}>Ajouter</button>
                <h2>Modifier un étudiant</h2>
                <input type="text" placeholder="ID" onChange={(e) => this.setState({ id: e.target.value })}
                />
                <input type="text" placeholder="Numéro" onChange={(e) => this.setState({ NumEtudiant: e.target.value })}
                />
                <input type="text" placeholder="Nom" onChange={(e) => this.setState({ Nom: e.target.value })}
                />
                <input type="text" placeholder="Prénom" onChange={(e) => this.setState({ Prénom: e.target.value })}
                />
                <input type="text" placeholder="Date de naissance" onChange={(e) => this.setState({ DatenET: e.target.value })}
                />
                <button onClick={this.handleUpdate}>Modifier</button>
            </div>
        );
    }
}
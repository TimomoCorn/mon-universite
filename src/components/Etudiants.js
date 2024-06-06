// Permet d’afficher Numéro Etudiant, Nom, Prénom, date de naissance
// Ces information s’affiche sous forme d’un tableau et on peut éditer, modifier, supprimer

import { getAll, add, update, remove } from "../services/operationEtuds";
import React, { Component } from "react";

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
      <div className="container mx-auto pt-3">
        <h1 className="text-2xl font-bold mb-4">Liste des Étudiants</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Numéro d'étudiant
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Nom
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Prénom
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Date de naissance
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Etuds.map((etud) => (
              <tr key={etud._id}>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {etud.NumEtudiant}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {etud.Nom}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {etud.Prénom}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {etud.DatenET}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  <button
                    onClick={() => {
                      this.handleUpdate(etud._id);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => {
                      this.handleDelete(etud._id);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={this.handleSubmit} className="mt-4 flex">
          <input
            type="text"
            name="NumEtudiant"
            value={this.state.NumEtudiant}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Numéro d'étudiant"
          />
          <input
            type="text"
            name="Nom"
            value={this.state.Nom}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Nom"
          />
          <input
            type="text"
            name="Prénom"
            value={this.state.Prénom}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Prénom"
          />
          <input
            type="text"
            name="DatenET"
            value={this.state.DatenET}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Date de naissance"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter
          </button>
        </form>
      </div>
    );
  }
}

export default ListEtuds;

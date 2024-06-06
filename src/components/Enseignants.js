// Permet d’afficher Code Enseignant, Nom, Prénom, Grade de l’enseignant, Code Matière
// Ces information s’affiche sous forme d’un tableau et on peut éditer, modifier, supprimer

import { getAll, add, update, remove } from "../services/operationEnseignants";
import React, { Component } from "react";

export class ListEnseignants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Enseignants: [],
      CodeEns: "",
      NomEns: "",
      PrenomEns: "",
      GradeEns: "",
      CodeMat: "",
    };
  }

  componentDidMount() {
    this.getEnseignants();
  }

  getEnseignants = () => {
    getAll((res) => {
      this.setState({
        Enseignants: res.data,
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
        CodeEns: this.state.CodeEns,
        NomEns: this.state.NomEns,
        PrenomEns: this.state.PrenomEns,
        GradeEns: this.state.GradeEns,
        CodeMat: this.state.CodeMat,
      },
      (res) => {
        if (res.status === 200) {
          this.getEnseignants();
        }
      }
    );
  };

  handleUpdate = (id) => {
    update(
      id,
      {
        CodeEns: this.state.CodeEns,
        NomEns: this.state.NomEns,
        PrenomEns: this.state.PrenomEns,
        GradeEns: this.state.GradeEns,
        CodeMat: this.state.CodeMat,
      },
      (res) => {
        if (res.status === 200) {
          this.getEnseignants();
        }
      }
    );
  };

  handleDelete = (id) => {
    remove(id, (res) => {
      if (res.status === 200) {
        this.getEnseignants();
      }
      alert(res);
    });
  };

  render() {
    return (
      <div className="container mx-auto pt-3">
        <h1 className="text-2xl font-bold mb-4">Liste des Enseignants</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Code Enseignant
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Nom
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Prénom
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Grade
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Code Matière
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Enseignants.map((ens) => (
              <tr key={ens._id}>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {ens.CodeEns}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {ens.NomEns}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {ens.PrenomEns}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {ens.GradeEns}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {ens.CodeMat}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
                    onClick={() => this.handleUpdate(ens._id)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={() => this.handleDelete(ens._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit} className="mt-4">
          <input
            type="text"
            name="CodeEns"
            placeholder="Code Enseignant"
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="NomEns"
            placeholder="Nom"
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="PrenomEns"
            placeholder="Prénom"
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="GradeEns"
            placeholder="Grade"
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="CodeMat"
            placeholder="Code Matière"
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
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

export default ListEnseignants;

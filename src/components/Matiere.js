// Créer un composant "Matiere" permettant d’afficher Code Matière, Libellé Matière, Coefficient Matière ..
// Ces information s’affiche sous forme d’un tableau et on peut éditer, modifier, supprimer.

import { getAll, add, update, remove } from "../services/operationMatieres";
import React, { Component } from "react";

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
      <div className="container mx-auto pt-3">
        <h2 className="text-2xl font-bold mb-4">Liste des Matières</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Code Matière
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Libellé Matière
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Coefficient Matière
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Matieres.map((matiere) => (
              <tr key={matiere._id}>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {matiere.CodeMat}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {matiere.LibelleMat}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {matiere.CoeffMat}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
                    onClick={() => this.handleUpdate(matiere._id)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={() => this.handleDelete(matiere._id)}
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
            name="CodeMat"
            value={this.state.CodeMat}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Code Matière"
          />
          <input
            type="text"
            name="LibelleMat"
            value={this.state.LibelleMat}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Libellé Matière"
          />
          <input
            type="text"
            name="CoeffMat"
            value={this.state.CoeffMat}
            onChange={this.handleChange}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
            placeholder="Coefficient Matière"
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

export default ListMatieres;

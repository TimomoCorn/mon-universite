// Créer un composant "Note" permettant d’afficher date, Note , Numéro Etudiant, Code Matière ….
// Ces information s’affiche sous forme d’un tableau et on peut éditer, modifier, supprimer.

import { getAll, add, update, remove } from "../services/operationNotes";
import React, { Component } from "react";

export class ListNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Notes: [],
      DateNote: "",
      Note: "",
      NumEtudiant: "",
      CodeMat: "",
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    getAll((res) => {
      this.setState({
        Notes: res.data,
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
        DateNote: this.state.DateNote,
        Note: this.state.Note,
        NumEtudiant: this.state.NumEtudiant,
        CodeMat: this.state.CodeMat,
      },
      (res) => {
        if (res.status === 200) {
          this.getNotes();
        }
      }
    );
  };

  handleUpdate = (id) => {
    update(
      id,
      {
        DateNote: this.state.DateNote,
        Note: this.state.Note,
        NumEtudiant: this.state.NumEtudiant,
        CodeMat: this.state.CodeMat,
      },
      (res) => {
        if (res.status === 200) {
          this.getNotes();
        }
      }
    );
  };

  handleDelete = (id) => {
    remove(id, (res) => {
      if (res.status === 200) {
        this.getNotes();
      }
    });
  };

  render() {
    return (
      <div className="container mx-auto pt-3">
        <h1 className="text-2xl font-bold mb-4">Liste des Notes</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Date Note
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Note
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-center border">
                Numéro Etudiant
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
            {this.state.Notes.map((note) => (
              <tr key={note._id}>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {note.Date}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {note.Note}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {note.NumEtudiant}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  {note.CodeMat}
                </td>
                <td className="border-b-2 border-gray-300 py-2 text-center border">
                  <button
                    onClick={() => this.handleUpdate(note._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => this.handleDelete(note._id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
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
            name="DateNote"
            value={this.state.DateNote}
            onChange={this.handleChange}
            placeholder="Date Note"
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="Note"
            value={this.state.Note}
            onChange={this.handleChange}
            placeholder="Note"
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="NumEtudiant"
            value={this.state.NumEtudiant}
            onChange={this.handleChange}
            placeholder="Numéro Etudiant"
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <input
            type="text"
            name="CodeMat"
            value={this.state.CodeMat}
            onChange={this.handleChange}
            placeholder="Code Matière"
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Ajouter
          </button>
        </form>
      </div>
    );
  }
}
export default ListNotes;

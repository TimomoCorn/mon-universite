const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Utilisation de express
const app = express();
const port = 4000;

// Utilisation de cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello server ...");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connexion à la base de données avec mongoose
const uriAtlas = "mongodb://localhost:27017/mon-universiteDB";
mongoose.connect(uriAtlas).then(() => console.log("successful connexion DB"));

// Définition de schéma et de modèle Étudiant
const Schema = mongoose.Schema;
let EtudSchema = new Schema(
  {
    NumEtudiant: String,
    Nom: String,
    Prénom: String,
    DatenET: String,
  },
  { versionKey: false }
);

let Etud = mongoose.model("Etudiants", EtudSchema, "Etudiants");

app.get("/Etudiants", async (req, res) => {
  try {
    let results = await Etud.find({});
    res.send(results);
  } catch (err) {
    // Gérer l'erreur ici
    console.error(err);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const etud = await etud.findByIdAndUpdate(req.params.id, req.body);
    await etud.save();
    res.status(200).send({ message: `${etud.nom} is succussffully updated` });
  } catch (err) {
    res.status(400).send({ error: `error updating etudiant ${err}` });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const etud = await Etud.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: `${etud.nom} is succussffully deleted` });
  } catch (err) {
    res.status(400).send({ error: `error deleting etudiant ${err}` });
  }
});

// Définition de schéma et de modèle Enseignant

const EnsSchema = new Schema(
  {
    CodeEns: String,
    NomEns: String,
    PrenomEns: String,
    GradeEns: String,
    CodeMat: String,
  },
  { versionKey: false }
);

let Ens = mongoose.model("Enseignants", EnsSchema, "Enseignants");

app.get("/Enseignants", async (req, res) => {
  try {
    let results = await Ens.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const ens = await Ens.findByIdAndUpdate(req.params.id, req.body);
    await ens.save();
    res.status(200).send({ message: `${ens.NomEns} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `error updating enseignant ${err}` });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const ens = await Ens.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: `${ens.NomEns} is successfully deleted` });
  } catch (err) {
    res.status(400).send({ error: `error deleting enseignant ${err}` });
  }
});

// Définition de schéma et de modèle Matière

const MatSchema = new Schema(
  {
    CodeMat: String,
    LibelléMat: String,
    CoefMat: Number,
  },
  { versionKey: false }
);

let Mat = mongoose.model("Matieres", MatSchema, "Matieres");

app.get("/Matieres", async (req, res) => {
  try {
    let results = await Mat.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const mat = await Mat.findByIdAndUpdate(req.params.id, req.body);
    await mat.save();
    res.status(200).send({ message: `${mat.LibelléMat} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `error updating matiere ${err}` });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const mat = await Mat.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: `${mat.LibelléMat} is successfully deleted` });
  } catch (err) {
    res.status(400).send({ error: `error deleting matiere ${err}` });
  }
});

// Définition de schéma et de modèle Note


const NoteSchema = new Schema(
  {
    _id: String,
    NumEtudiant: String,
    CodeMat: String,
    Note: Number,
    Date: String,
  },
  { versionKey: false }
);

let Note = mongoose.model("Notes", NoteSchema, "Notes");

app.get("/Notes", async (req, res) => {
  try {
    let results = await Note.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body);
    await note.save();
    res.status(200).send({ message: `Note with id ${note._id} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `Error updating note: ${err}` });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: `Note with id ${note._id} is successfully deleted` });
  } catch (err) {
    res.status(400).send({ error: `Error deleting note: ${err}` });
  }
});

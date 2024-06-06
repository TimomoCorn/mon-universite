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
    DatenET: String,
    Prenom: String,
  },
  { versionKey: false }
);

let Etud = mongoose.model("Etudiants", EtudSchema, "Etudiants");

app.get("/Etudiants", async (req, res) => {
  try {
    let results = await Etud.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
  }
});

app.post("/Etudiants/add", async (req, res) => {
  try {
    const etud = new Etud(req.body);
    await etud.save();
    res.status(200).send({ message: `${etud.nom} is successfully added` });
  } catch (err) {
    res.status(400).send({ error: `error adding etudiant ${err}` });
  }
});

app.put("Etudiants/update/:id", async (req, res) => {
  try {
    const etud = await Etud.findByIdAndUpdate(req.params.id, req.body);
    await etud.save();
    res.status(200).send({ message: `${etud.nom} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `error updating etudiant ${err}` });
  }
});

app.delete("/Etudiants/delete/:id", async (req, res) => {
  try {
    const etud = await Etud.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: `${etud.nom} is successfully deleted` });
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

app.post("/Enseignants/add", async (req, res) => {
  try {
    const ens = new Ens(req.body);
    await ens.save();
    res.status(200).send({ message: `${ens.NomEns} is successfully added` });
  } catch (err) {
    res.status(400).send({ error: `error adding enseignant ${err}` });
  }
});

app.put("/Enseignants/update/:id", async (req, res) => {
  try {
    const ens = await Ens.findByIdAndUpdate(req.params.id, req.body);
    await ens.save();
    res.status(200).send({ message: `${ens.NomEns} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `error updating enseignant ${err}` });
  }
});

app.delete("/Enseignants/delete/:id", async (req, res) => {
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
    LibelleMat: String,
    CoefMat: Number,
  },
  { versionKey: false }
);

let Mat = mongoose.model("Matiere", MatSchema, "Matiere");

app.get("/Matiere", async (req, res) => {
  try {
    let results = await Mat.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
  }
});

app.post("/Matiere/add", async (req, res) => {
  try {
    const mat = new Mat(req.body);
    await mat.save();
    res
      .status(200)
      .send({ message: `${mat.LibelleMat} is successfully added` });
  } catch (err) {
    res.status(400).send({ error: `error adding matiere ${err}` });
  }
});
app.put("/Matiere/update/:id", async (req, res) => {
  try {
    const mat = await Mat.findByIdAndUpdate(req.params.id, req.body);
    await mat.save();
    res
      .status(200)
      .send({ message: `${mat.LibelleMat} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `error updating matiere ${err}` });
  }
});

app.delete("/Matiere/delete/:id", async (req, res) => {
  try {
    const mat = await Mat.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ message: `${mat.LibelleMat} is successfully deleted` });
  } catch (err) {
    res.status(400).send({ error: `error deleting matiere ${err}` });
  }
});

// Définition de schéma et de modèle Note

const NoteSchema = new Schema(
  {
    NumEtudiant: String,
    CodeMat: String,
    Note: Number,
    Date: String,
  },
  { versionKey: false }
);

let Note = mongoose.model("Note", NoteSchema, "Note");

app.get("/Note", async (req, res) => {
  try {
    let results = await Note.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
  }
});

app.post("/Note/add", async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res
      .status(200)
      .send({ message: `Note with id ${note._id} is successfully added` });
  } catch (err) {
    res.status(400).send({ error: `Error adding note: ${err}` });
  }
});

app.put("/Note/update/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body);
    await note.save();
    res
      .status(200)
      .send({ message: `Note with id ${note._id} is successfully updated` });
  } catch (err) {
    res.status(400).send({ error: `Error updating note: ${err}` });
  }
});

app.delete("/Note/delete/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ message: `Note with id ${note._id} is successfully deleted` });
  } catch (err) {
    res.status(400).send({ error: `Error deleting note: ${err}` });
  }
});

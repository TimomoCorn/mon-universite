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

const express = require('express')
const mongoose = require('mongoose');

// Utilisation de express
const app = express()
const port = 4000
app.get('/', (req, res) => { res.send('Hello server ...');
});
app.listen(port, () => {
console.log(`Server is running on port ${port}`) })


// Connexion à la base de données avec mongoose
const uriCompass = "mongodb://localhost:27017/mon-universiteDB"
const uriAtlas = "mongodb://localhost:27017/"
mongoose.connect(uriCompass).then(()=> console.log("successful connexion DB"));

// Définition de schéma et de modèle Étudiant
const Schema = mongoose.Schema; let EtudSchema = new Schema({
    NumEtudiant: String,
    Nom: String,
    Prénom: String,
    DatenET: String,
}, { versionKey: false });

let Etud = mongoose.model("Etudiants", EtudSchema);

app.get("/Etudiants", async (req, res) => {
    try {
        let results = await Etud.find({});
        res.send(results);
    } catch (err) {
        // Gérer l'erreur ici
        console.error(err);
    }
});
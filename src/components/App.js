import "../styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "../navigation/menu";

import Accueil from "./Accueil";
import ListEtuds from "./Etudiants";
import ListEnseignants from "./Enseignants";
import ListMatiere from "./Matiere";
import ListNote from "./Note";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/etudiants" element={<ListEtuds />} />
        <Route path="/enseignants" element={<ListEnseignants />} />
        <Route path="/matieres" element={<ListMatiere />} />
        <Route path="/notes" element={<ListNote />} />
      </Routes>
    </Router>
  );
}

export default App;

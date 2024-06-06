import axios from "axios";

export const getAll = (callback) => {
  axios.get("http://localhost:4000/enseignants").then((res) => callback(res));
};

export const add = (enseignant, callback) => {
  axios
    .post("http://localhost:4000/enseignants/add", enseignant)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const remove = (id, callback) => {
  axios
    .delete(`http://localhost:4000/enseignants/delete/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const update = (id, enseignant, callback) => {
  axios
    .put(`http://localhost:4000/enseignants/update/${id}`, enseignant)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const getEnseignants = () => {
  getAll((res) => {
    this.setState({
      Enseignants: res.data,
    });
  });
};

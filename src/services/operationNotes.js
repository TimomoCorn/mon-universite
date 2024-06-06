import axios from "axios";

export const getAll = (callback) => {
  axios.get("http://localhost:4000/note").then((res) => callback(res));
};

export const add = (note, callback) => {
  axios
    .post("http://localhost:4000/note/add", note)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const remove = (id, callback) => {
  axios
    .delete(`http://localhost:4000/note/delete/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const update = (id, note, callback) => {
  axios
    .put(`http://localhost:4000/note/update/${id}`, note)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const getNotes = () => {
  getAll((res) => {
    this.setState({
      Notes: res.data,
    });
  });
};

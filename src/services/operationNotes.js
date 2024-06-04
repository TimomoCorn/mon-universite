import axios from "axios"

export const getAll = (callback) => {
    axios.get("http://localhost:4000/notes").then((res) => callback(res));
}

export const add = (note, callback) => {
    axios.post('http://localhost:4000/add', note)
        .then((res) => callback(res))
        .catch((err) => callback(err));
}

export const remove = (id, callback) => {
    axios.delete(`http://localhost:4000/delete/${id}`).then((res) => callback(res))
        .catch((err) => callback(err));
}

export const update = (id, note, callback) => {
    axios.put(`http://localhost:4000/update/${id}`, note).then((res) => callback(res))
        .catch((err) => callback(err));
}

export const getNotes = () => {
    getAll((res) => {
        this.setState({
            Notes: res.data,
        });
    });
};

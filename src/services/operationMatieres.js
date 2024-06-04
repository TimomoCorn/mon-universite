import axios from "axios"

export const getAll = (callback) => {
    axios.get("http://localhost:4000/matieres").then((res) => callback(res));
}

export const add = (matiere, callback) => {
    axios.post('http://localhost:4000/add', matiere)
        .then((res) => callback(res))
        .catch((err) => callback(err));
}

export const remove = (id, callback) => {
    axios.delete(`http://localhost:4000/delete/${id}`).then((res) => callback(res))
        .catch((err) => callback(err));
}

export const update = (id, matiere, callback) => {
    axios.put(`http://localhost:4000/update/${id}`, matiere).then((res) => callback(res))
        .catch((err) => callback(err));
}

export const getMatieres = () => {
    getAll((res) => {
        this.setState({
            Matieres: res.data,
        });
    });
};

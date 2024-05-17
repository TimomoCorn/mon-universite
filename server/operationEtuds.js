export const getAll = (callback) => {
  axios.get("http://localhost:4000/etudiants").then((res) => callback(res));
};

getEtudiants = () => {
  getAll((res) => {
    this.setState({
      Etuds: res.data,
    });
  });
};
componentDidMount = () => {
  this.getEtudiants();
};

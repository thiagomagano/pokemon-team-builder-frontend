import axios from "axios";

const api = axios.create({
  baseURL: "https://reactpokemonbuilder.herokuapp.com"
});

export default api;
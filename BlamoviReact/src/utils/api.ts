//chamando o pacote axios
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8090/"
});

export default api;
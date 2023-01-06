import axios from "axios";

const api = axios.create({
    // baseURL: "http://{ip da máquina p/ acessar pelo Expo Go do Celular}:3000"
    baseURL: "http://localhost:3000"
})

export default api;
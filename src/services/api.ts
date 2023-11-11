import axios from "axios";
const baseUrl = "https://fakestoreapi.com/";

const api = axios.create({ baseURL: baseUrl, timeout: 3000 });

export default api;

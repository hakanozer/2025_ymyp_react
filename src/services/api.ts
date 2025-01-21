import axios from "axios";

const BASE_URL = "https://jsonbulut.com/api/";
const TIMEOUT = 15000;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});

export default api;
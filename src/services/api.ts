import axios from "axios";

export const api = axios.create({
    baseURL: 'https://draft-footz.onrender.com',
    timeout: 8000
});
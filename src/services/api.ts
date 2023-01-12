import axios from "axios";

const baseUrl = () => {
  let config = localStorage.getItem('@apiConfig');
  if (config === 'renan') return 'http://127.0.0.1:3001';
  if (config === 'radmin') return 'http://26.38.126.227:3001';
  return 'https://draft-footz.onrender.com/';
};

export const api = axios.create({
  baseURL: 'https://draft-footz.onrender.com/',
  timeout: 5000,
});
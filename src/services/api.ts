import axios from "axios";

// const baseUrl = {
//   render: "https://draft-footz.onrender.com/",
//   radmin: {
//     RenanPC: "http://26.38.126.227:3001",
//   },
//   localhost: "http://localhost:3001",
// };

// Validando se está no PC do Renan
// caso seja o PC do Renan a baseUrl deve ser localhost,
// caso contrário, IP do radmin

// const RenanPC = localStorage.getItem('@RenanPC');

export const api = axios.create({
  baseURL: "https://draft-footz.onrender.com/",
  timeout: 5000,
});

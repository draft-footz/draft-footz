import axios from "axios";

// const baseUrl = {
//   render: "https://draft-footz.onrender.com/",
//   radmin: {
//     RenanPC: "http://localhost:3001",
//   },
// };

// export const api = axios.create({
//   baseURL: baseUrl.radmin.RenanPC,
//   timeout: 5000,
// });

export const api = axios.create({
  baseURL: "https://draft-footz.onrender.com/",
  timeout: 5000,
});

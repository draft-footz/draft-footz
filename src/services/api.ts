import axios from "axios";

const baseUrl = {
    render: 'https://draft-footz.onrender.com/',
    radmin: {
        RenanPC: 'http://26.38.126.227:3001'
    }
};

// Validando se está no PC do Renan
// caso seja o PC do Renan a baseUrl deve ser localhost, 
// caso contrário, IP do radmin

const RenanPC = localStorage.getItem('@RenanPC');

export const api = axios.create({
    baseURL: RenanPC ? 'http://127.0.0.1:3001' : baseUrl.radmin.RenanPC,
    timeout: 5000
});

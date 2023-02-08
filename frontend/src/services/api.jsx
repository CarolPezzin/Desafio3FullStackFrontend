import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://desafio-3-fullstack.onrender.com',
    baseURL: "http://localhost:3000"
    // timeout: 5000,
})

export default api
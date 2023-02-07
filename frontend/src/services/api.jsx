import axios from 'axios'

const api = axios.create({
    baseURL: 'https://desafio-3-fullstack.onrender.com',
    // timeout: 5000,
})

export default api
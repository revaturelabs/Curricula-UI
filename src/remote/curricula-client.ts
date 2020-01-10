import axios from 'axios'

export const curriculaClient = axios.create({
    baseURL: 'http://localhost:1910',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})
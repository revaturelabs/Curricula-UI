import axios from 'axios'
import { environment } from '../environment'

export const curriculaClient = axios.create({
    baseURL: environment.APIBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})
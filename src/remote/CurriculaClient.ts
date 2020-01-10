import axios from "../../node_modules/axios"

let environment = {
    dev: "http://127.0.0.1:1910",
    prod: "http://127.0.0.1:8080"
}

export const client = axios.create({
    baseURL: (environment.dev || environment.prod),
    headers: {
        'Content-Type':'application/json'
    }
})
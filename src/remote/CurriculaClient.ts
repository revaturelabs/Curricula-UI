
export const client = axios.create({
    baseURL: environment.baseUrl,
    headers: {
        'Content-Type':'application/json'
    }
})
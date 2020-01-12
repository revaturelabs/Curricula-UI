import { curriculaClient } from './curricula-client'

export async function apiGetAllCurricula() {
    const response = await curriculaClient.get('/curricula')
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}
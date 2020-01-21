import { curriculaClient } from './curricula-client'
import { Curriculum } from '../models/curriculum';

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
                body: 'Failed to get all curricula'
            }
        }
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to get all curricula'
        }
    }
}

export async function apiSubmitCurriculum(newCurriculum: Curriculum) {
    const response = await curriculaClient.post('/curricula', newCurriculum)
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to create curriculum'
            }
        }
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to create curriculum'
        }
    }
}
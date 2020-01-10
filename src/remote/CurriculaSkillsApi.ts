import { curriculaClient } from './curricula-client'
import { Curriculum } from '../models/curriculum'

export async function apiGetAllSkills() {
    const response = await curriculaClient.get('/skills')
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to get all skills'
            }
        }
    } catch (e) {
        return {
            status: response.status,
            body: 'Failed to get all skills'
        }
    }
}

export async function apiSubmitCurriculum(newCurriculum: Curriculum) {
    const response = await curriculaClient.post('/curricula', newCurriculum)
    try {
        if (response.status === 201) {
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
    } catch (e) {
        return {
            status: response.status,
            body: 'Failed to create curriculum'
        }
    }
}
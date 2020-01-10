import { client } from './CurriculaClient'
import { Curriculum } from '../models/curriculum'

export async function apiGetAllSkills() {
    const response = await client.get('/skills')
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'might want to brush up on those skills!'
            }
        }
    } catch (e) {
        return {
            status: response.status,
            body: 'still needs some polishing...'
        }
    }
}

export async function apiSubmitCurriculum(newCurriculum: Curriculum) {
    const response = await client.post('/curricula', newCurriculum)
    try {
        if (response.status === 201) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'some school officials declined your curriculum submission'
            }
        }
    } catch (e) {
        return {
            status: response.status,
            body: 'there was something exceptionally wrong with your teaching method'
        }
    }
}
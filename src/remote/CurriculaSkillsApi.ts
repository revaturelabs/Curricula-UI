import { client } from './CurriculaClient'

export async function apiGetAllSkills() {
    const response = await client.get('/skill/')
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
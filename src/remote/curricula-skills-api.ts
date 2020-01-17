import { curriculaClient } from './curricula-client'
import { Skill } from '../models/skill'

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

export async function apiSubmitSkill(skillToSubmit: Skill) {
    const response = await curriculaClient.post('/skills', skillToSubmit)
    try{
        if(response.status === 200){
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to create skill'
            }
        }
    } catch(e) {
        return {
            status: response.status,
            body: 'Failed to create new skill'
        }
    }
}
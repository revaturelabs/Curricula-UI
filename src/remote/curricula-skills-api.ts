import { curriculaClient } from './curricula-client'
import { Skill } from '../models/skill'
import { Curriculum } from '../models/curriculum'

export async function apiGetAllSkills() {
    const response = await curriculaClient.get('/vis/skills')
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
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to get all skills'
        }
    }
}

export async function apiSubmitSkill(skillToSubmit: Skill) {
    const response = await curriculaClient.post('/vis/skills', skillToSubmit)
    try {
        if (response.status === 200) {
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
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to create new skill'
        }
    }
}

export async function apiSubmitCurriculum(newCurriculum: Curriculum) {
    const response = await curriculaClient.post('/vis/curricula', newCurriculum)
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
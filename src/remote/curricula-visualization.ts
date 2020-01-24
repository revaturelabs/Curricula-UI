import { curriculaClient } from './curricula-client'
import { Visualization } from '../models/visualization';

export async function apiGetAllVisualizations() {
    const response = await curriculaClient.get('/vis/visualizations')
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to get all visualizations'
            }
        }
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to get all visualizations'
        }
    }
}

export async function apiSubmitVisualization(newVisualization: Visualization) {
    const response = await curriculaClient.post('/vis/visualizations', newVisualization)
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
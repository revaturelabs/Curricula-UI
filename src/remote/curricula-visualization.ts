import { curriculaClient } from './curricula-client'
import { Visualization } from '../models/visualization';

export async function apiGetAllVisualizations() {
    const response = await curriculaClient.get('/visualizations')
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

export async function apiSubmitVisualization(newVisualization: Visualization) {
    const response = await curriculaClient.post('/visualizations', newVisualization)
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
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}
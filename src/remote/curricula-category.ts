import { curriculaClient } from './curricula-client'
import { Category } from '../models/category';

export async function apiGetAllCategories() {
    const response = await curriculaClient.get('/vis/categories')
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to get all categories'
            }
        }
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to get all categories'
        }
    }
}

export async function apiSaveOneCategory(categoryToCreate: Category) {
    const response = await curriculaClient.post('/vis/categories', categoryToCreate)
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to save new category'
            }
        }
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to save new category'
        }
    }
}
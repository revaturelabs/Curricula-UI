import { curriculaClient } from './curricula-client'

export async function apiGetAllCategories() {
    const response = await curriculaClient.get('/categories')
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

// Submit Category
export async function curriculaSubmitCategory(categoryId: number, categoryName: string){
    const fields = {
        categoryId: 0,
         categoryName: ''
    }
    try{
        let response = await curriculaClient.post('/categories', fields)
        if(response.status === 200) {
            return{
                status: response.status,
                body: response.data
            }
        }
    } catch(e) {
        console.log(e);
        throw new Error('Something Went Wrong')    
    }
}
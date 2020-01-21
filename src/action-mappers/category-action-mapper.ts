import { apiGetAllCategories, apiSaveOneCategory } from "../remote/curricula-category"
import { Category } from "../models/category"


export const categoryTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_CATEGORIES_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_CATEGORIES_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUCCESSFULLY_CREATED_CATEGORY',
    SUBMIT_UNSUCCESSFUL: 'FAILED_TO_CREATE_CATEGORY'
}

export const getAllCategories = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllCategories()
        if (res.status === 200) {
            dispatch({
                type: categoryTypes.SUCCESSFUL_GET_ALL,
                payload: {
                    allCategories: res.body
                }
            })
        } else {
            dispatch({
                type: categoryTypes.UNSUCCESSFUL_GET_ALL
            })
        }
    } catch (error) {
        dispatch({
            type: categoryTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

export const postNewCategory = (categoryToCreate: Category) => async (dispatch: any) => {
    try {
        let res = await apiSaveOneCategory(categoryToCreate)
        if (res.status === 200) {
            dispatch({
                type: categoryTypes.SUBMIT_SUCCESSFUL,
                payload: {
                    category: res.body
                }
            })
        } else {
            dispatch({
                type: categoryTypes.SUBMIT_UNSUCCESSFUL
            })
        }
        return res
    } catch (error) {
        dispatch({
            type: categoryTypes.SUBMIT_UNSUCCESSFUL
        })
    }
}

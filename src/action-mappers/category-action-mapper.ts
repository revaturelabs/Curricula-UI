import { apiGetAllCategories, apiSaveOneCategory } from "../remote/curricula-category"
import { Category } from "../models/category"


export const categoryTypes = {
    SUCCESSFUL_GET_ALL: 'CATEGORIES_SUCCESSFUL_GET_ALL',
    UNSUCCESSFUL_GET_ALL: 'CATEGORIES_UNSUCCESSFUL_GET_ALL',
    SUCCESSFUL_POST_NEW_CATEGORY: 'NEW_CATEGORY_SUCCESSFULY_POSTED',
    UNSUCCESSFUL_POST_NEW_CATEGORY: 'NEW_CATEGORY_POST_FAILED'
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
    } catch (e) {
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
                type: categoryTypes.SUCCESSFUL_POST_NEW_CATEGORY,
                payload: {
                    category: res.body
                }
            })
        } else {
            dispatch({
                type: categoryTypes.UNSUCCESSFUL_POST_NEW_CATEGORY
            })
        }
    } catch(e) {
        dispatch({
            type: categoryTypes.UNSUCCESSFUL_POST_NEW_CATEGORY
        })
    }
}

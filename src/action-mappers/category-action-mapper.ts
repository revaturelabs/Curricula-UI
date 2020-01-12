import { apiGetAllCategories } from "../remote/curricula-category"


export const categoryTypes = {
    SUCCESSFUL_GET_ALL: 'CATEGORIES_SUCCESSFUL_GET_ALL',
    UNSUCCESSFUL_GET_ALL: 'CATEGORIES_UNSUCCESSFUL_GET_ALL'
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

import { apiGetAllCurricula } from "../remote/curricula-curriculum"


export const curriculumTypes = {
    SUCCESSFUL_GET_ALL: 'CURRICULA_SUCCESSFUL_GET_ALL',
    UNSUCCESSFUL_GET_ALL: 'CURRICULA_UNSUCCESSFUL_GET_ALL'
}

export const getAllCurricula = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllCurricula()
        if (res.status === 200) {
            dispatch({
                type: curriculumTypes.SUCCESSFUL_GET_ALL,
                payload: {
                    allCurricula: res.body
                }
            })
        } else {
            dispatch({
                type: curriculumTypes.UNSUCCESSFUL_GET_ALL
            })
        }
    } catch (e) {
        dispatch({
            type: curriculumTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

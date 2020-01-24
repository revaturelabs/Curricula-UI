import { apiGetAllCurricula, apiSubmitCurriculum } from "../remote/curricula-curriculum"
import { Curriculum } from "../models/curriculum"


export const curriculumTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_CURRICULA_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_CURRICULA_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUCCESSFULLY_CREATED_CURRICULUM',
    SUBMIT_UNSUCCESSFUL: 'FAILED_TO_CREATE_CURRICULUM'
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
    } catch (error) {
        dispatch({
            type: curriculumTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

export const postSubmitCurriculum = (newCurriculum: Curriculum) => async (dispatch: any) => {
    try {
        let res = await apiSubmitCurriculum(newCurriculum)
        if (res.status === 200) {
            dispatch({
                type: curriculumTypes.SUBMIT_SUCCESSFUL,
                payload: {
                    curriculum: res.body
                }
            })
        } else {
            dispatch({
                type: curriculumTypes.SUBMIT_UNSUCCESSFUL
            })
        }
        return res
    } catch (error) {
        dispatch({
            type: curriculumTypes.SUBMIT_UNSUCCESSFUL
        })
    }
}
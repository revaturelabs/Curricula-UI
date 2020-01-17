import { apiGetAllCurricula, apiSubmitCurriculum } from "../remote/curricula-curriculum"
import { Curriculum } from "../models/curriculum"


export const curriculumTypes = {
    SUCCESSFUL_GET_ALL: 'CURRICULA_SUCCESSFUL_GET_ALL',
    UNSUCCESSFUL_GET_ALL: 'CURRICULA_UNSUCCESSFUL_GET_ALL',
    SUBMIT_SUCCESSFUL: 'SUBMIT_CURRICULUM_SUCCESSFUL',
    SUBMIT_UNSUCCESSFUL: 'SUBMIT_CURRICULUM_UNSUCCESSFUL'
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
    } catch (e) {
        dispatch({
            type: curriculumTypes.SUBMIT_UNSUCCESSFUL
        })
    }
}
import { apiGetAllSkills, apiSubmitCurriculum } from '../remote/CurriculaSkillsApi' 

export const skillPillTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUBMIT_CURRICULUM_SUCCESSFUL',
    SUBMIT_UNSUCCESSFUL: 'SUBMIT_CURRICULUM_UNSUCCESSFUL'
}

export const getAllSkills = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllSkills()
        if (res.status === 200) {
            dispatch({
                type: skillPillTypes.SUCCESSFUL_GET_ALL,
                payload: {
                    allSkills: res.body
                }
            })
        } else {
            dispatch({
                type: skillPillTypes.UNSUCCESSFUL_GET_ALL
            })
        }
    } catch (e) {
        dispatch({
            type: skillPillTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

export const submitCurriculum = () => async (dispatch: any) => {
    try {
        let res = await apiSubmitCurriculum()
        if (res.status === 200) {
            dispatch({
                type: skillPillTypes.SUBMIT_SUCCESSFUL,
                payload: {
                    message: 'Successfully Submitted'
                }
            })
        } else {
            dispatch({
                type: skillPillTypes.SUBMIT_UNSUCCESSFUL
            })
        }
    } catch (e) {
        dispatch({
            type: skillPillTypes.SUBMIT_UNSUCCESSFUL
        })
    }
}
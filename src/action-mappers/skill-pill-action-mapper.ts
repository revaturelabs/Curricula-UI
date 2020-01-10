import { apiGetAllSkills, apiSubmitCurriculum } from '../remote/CurriculaSkillsApi' 
import { Curriculum } from '../models/curriculum'

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

export const submitCurriculum = (newCurriculum: Curriculum) => async (dispatch: any) => {
    try {
        let res = await apiSubmitCurriculum(newCurriculum)
        if (res.status === 200) {
            dispatch({
                type: skillPillTypes.SUBMIT_SUCCESSFUL,
                payload: {
                    curriculum: res.body
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

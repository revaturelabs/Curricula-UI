import { apiGetAllSkills, apiSubmitSkill } from '../remote/curricula-skills-api'
import { Skill } from '../models/skill'

export const skillPillTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUCESSFULLY_CREATED_SKILL',
    SUBMIT_UNSUCCESSFUL: 'FAILED_TO_CREATE_SKILL'
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
    } catch (error) {
        dispatch({
            type: skillPillTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

export const submitNewSkill = (skillToSubmit: Skill) => async (dispatch: any) => {
    try {
        let res = await apiSubmitSkill(skillToSubmit)
        if (res.status === 200) {
            dispatch({
                type: skillPillTypes.SUBMIT_SUCCESSFUL,
                payload: {
                    skill: res.body
                }
            })
        } else {
            dispatch({
                type: skillPillTypes.SUBMIT_UNSUCCESSFUL
            })
        }
        return res
    } catch (error) {
        dispatch({
            type: skillPillTypes.SUBMIT_UNSUCCESSFUL
        })
    }
}

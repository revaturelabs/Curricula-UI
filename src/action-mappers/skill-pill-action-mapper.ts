import { apiGetAllSkills, apiSubmitCurriculum, apiSubmitSkill } from '../remote/CurriculaSkillsApi'
import { Curriculum } from '../models/curriculum'
import { Skill } from '../models/skill'

export const skillPillTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUBMIT_CURRICULUM_SUCCESSFUL',
    SUBMIT_UNSUCCESSFUL: 'SUBMIT_CURRICULUM_UNSUCCESSFUL',
    POST_NEW_SKILL_SUCCESS: 'SUCESSFULLY_POSTED_NEW_SKILL',
    POST_NEW_SKILL_FAIL: 'FAILURE_TO_POST_NEW_SKILL'
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

export const submitNewSkill = (skillToSubmit: Skill) => async (dispatch: any) => {
    try {
        let res = await apiSubmitSkill(skillToSubmit)
        if (res.status === 200) {
            dispatch({
                type: skillPillTypes.POST_NEW_SKILL_SUCCESS,
                payload: {
                    skill: res.body
                }
            })
        } else {
            dispatch({
                type: skillPillTypes.POST_NEW_SKILL_FAIL
            })
        }
    } catch (e) {
        dispatch({
            type: skillPillTypes.POST_NEW_SKILL_FAIL
        })
    }
}

export const postSubmitCurriculum = (newCurriculum: Curriculum) => async (dispatch: any) => {
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

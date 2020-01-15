import { Skill } from '../models/skill'
import { skillPillTypes } from '../action-mappers/skill-pill-action-mapper'
import { ISkillState } from './index'
import { Category } from '../models/category'

const initialState: ISkillState = {
    skills: [new Skill(0, '', new Category(0, ''))],
    newSkill: new Skill(0, '', new Category(0,'')),
    message: ''
}

export const skillsReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case skillPillTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                skills: action.payload.allSkills
            }
        }
        case skillPillTypes.UNSUCCESSFUL_GET_ALL: {
            return {
                ...state,
                message: 'Failed to retrieve skills'
            }
        }
        case skillPillTypes.SUBMIT_SUCCESSFUL: {
            return {
                ...state,
                message: 'Curriculum created successfully'
            }
        }
        case skillPillTypes.SUBMIT_UNSUCCESSFUL: {
            return {
                ...state,
                message: 'Reducer failed to create curriculum'
            }
        }
        case skillPillTypes.POST_NEW_SKILL_SUCCESS: {
            return {
                ...state,
                newSkill: action.payload.newSkill
            }
        }
        case skillPillTypes.POST_NEW_SKILL_FAIL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}


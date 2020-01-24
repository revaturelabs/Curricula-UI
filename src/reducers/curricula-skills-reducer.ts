import { Skill } from '../models/skill'
import { skillPillTypes } from '../action-mappers/skill-action-mapper'
import { ISkillState } from './index'
import { Category } from '../models/category'

const initialState: ISkillState = {
    skills: [new Skill(0, '', new Category(0, ''))],
    newSkill: new Skill(0, '', new Category(0,''))
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
            let skills = [...state.skills]
            skills.push(action.payload.skill)
            return {
                ...state,
                skills,
                newSkill: action.payload.skill
            }
        }
        case skillPillTypes.SUBMIT_UNSUCCESSFUL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}
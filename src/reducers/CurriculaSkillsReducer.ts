import { Skill } from '../models/skill'
import { skillPillTypes } from '../action-mappers/skill-pill-action-mapper'
import { ISkillState } from './index'
import { Category } from '../models/category'

<<<<<<< HEAD
const initialState : ISkillState = {
    skills: [new Skill(0,'',new Category(0,''))],
=======
const initialState: ISkillState = {
    skills: [new Skill(0, '', new Category(0, ''))],
>>>>>>> 8ee99cc85780348939cd9b2cba2b6888a2532d0a
    message: ''
}

export const skillsReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case skillPillTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
<<<<<<< HEAD
                skills : action.payload.allSkills
=======
                skills: action.payload.allSkills
>>>>>>> 8ee99cc85780348939cd9b2cba2b6888a2532d0a
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
                message: 'Failed to create curriculum'
            }
        }
        default:
            return state
    }
}


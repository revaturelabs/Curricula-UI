import { Skill } from '../models/skill'
import { skillPillTypes } from '../action-mappers/skill-pill-action-mapper'
import { ISkillState } from './index'
import { Curriculum } from '../models/curriculum'

const initialState : ISkillState = {
    skills: [new Skill(0,'',[])],
    newCurriculum: new Curriculum(0,'',[])
}

export const skillsReducer = (state = initialState, action : any) => {

    switch(action.type){
        case skillPillTypes.SUCCESSFUL_GET_ALL: {
            return { 
                ...state,
                skillSet : action.payload.allSkills
            }
        }
        case skillPillTypes.UNSUCCESSFUL_GET_ALL: {
            return {
                ...state,
                message: 'Skills reduced to nill, amigo'
            }
        }
        case skillPillTypes.SUBMIT_SUCCESSFUL: {
            return {
                ...state,
                curriculum: action.payload.curriculum
            }
        }
        case skillPillTypes.SUBMIT_UNSUCCESSFUL: {
            return {
                ...state,
                message:  'New skills Reductively Declined'
            }
        }
        default :
            return state
    }
}


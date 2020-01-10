import { Skill } from '../models/skill'
import { skillPillTypes } from '../action-mappers/skill-pill-action-mapper'
import { ISkillState } from './index'

const initialState : ISkillState = {
    skills: [new Skill(0,'',[])]
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
        default :
            return state
    }
}
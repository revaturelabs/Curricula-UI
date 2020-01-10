import { combineReducers } from "redux";
import { Skill } from '../models/skill'
import { skillsReducer } from './CurriculaSkillsReducer'

export interface ISkillState {
    allSkills: Skill[],
    message: string
}

export interface IState{
    allSkills: ISkillState
}

export const state = combineReducers<IState>({
    allSkills: skillsReducer
})
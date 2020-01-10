import { combineReducers } from "redux";
import { Skill } from '../models/skill'
import { skillsReducer } from './CurriculaSkillsReducer'

export interface ISkillState {
    skills: Skill[]
}

export interface IState{
    skills: ISkillState
}

export const state = combineReducers<IState>({
    skills: skillsReducer
})
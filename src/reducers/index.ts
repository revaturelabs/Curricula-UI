import { combineReducers } from "redux";
import { Skill } from '../models/skill'
import { skillsReducer } from './CurriculaSkillsReducer'
import { Curriculum } from "../models/curriculum";

export interface ISkillState {
    skills: Skill[],
    newCurriculum: Curriculum
}

export interface IState{
    skillSet: ISkillState
    newCurriculum: ISkillState
}

export const state = combineReducers<IState>({
    skillSet: skillsReducer,
    newCurriculum: skillsReducer
})
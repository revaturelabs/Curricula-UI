import { combineReducers } from "redux";
import { Skill } from '../models/skill'
import { skillsReducer } from './CurriculaSkillsReducer'
import { Visualization } from "../models/visualization";
import { visualizationReducer } from "./visualization-reducer";

export interface ISkillState {
    skillSet: Skill[],
    message: string
}

export interface IVisualizationState {
    visualizations: Visualization[]
}

export interface IState {
    allSkills: ISkillState
    allVisualizations: IVisualizationState
}

export const state = combineReducers<IState>({
    allSkills: skillsReducer,
    allVisualizations: visualizationReducer,
})
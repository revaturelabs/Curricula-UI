import { combineReducers } from "redux";
import { Skill } from '../models/skill'
import { skillsReducer } from './CurriculaSkillsReducer'
import { Visualization } from "../models/visualization";
import { visualizationReducer } from "./visualization-reducer";
import { Curriculum } from "../models/curriculum";
import { curriculumReducer } from "./curriculum-reducer";

export interface ISkillState {
    allSkills: Skill[],
    message: string
}

export interface IVisualizationState {
    visualizations: Visualization[]
}

export interface ICurriculumState {
    curricula: Curriculum[]
}

export interface IState {
    allSkills: ISkillState
    allVisualizations: IVisualizationState
    allCurricula: ICurriculumState
}

export const state = combineReducers<IState>({
    allSkills: skillsReducer,
    allVisualizations: visualizationReducer,
    allCurricula: curriculumReducer
})
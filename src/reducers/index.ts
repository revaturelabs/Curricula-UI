import { combineReducers } from "redux";
import { Skill } from '../models/skill'
import { skillsReducer } from './CurriculaSkillsReducer'
import { Visualization } from "../models/visualization";
import { visualizationReducer } from "./visualization-reducer";
import { Curriculum } from "../models/curriculum";
import { curriculumReducer } from "./curriculum-reducer";
import { Category } from "../models/category";
import { categoryReducer } from "./category-reducer";
import { visualizationDisplayReducer } from "./visualization-display-reducer";

export interface ISkillState {
    skills: Skill[],
    message: string
}

export interface IVisualizationState {
    visualizations: Visualization[]
}

export interface ICurriculumState {
    curricula: Curriculum[]
}

export interface IVistualizationDisplayState {
viscurricula : Curriculum[]

}

export interface ICategoryState {
    categories: Category[]
}

export interface IState {
    allSkills: ISkillState
    allVisualizations: IVisualizationState
    allCurricula: ICurriculumState
    allCategories: ICategoryState
    viscurricula:IVistualizationDisplayState
}

export const state = combineReducers<IState>({
    allSkills: skillsReducer,
    allVisualizations: visualizationReducer,
    allCurricula: curriculumReducer,
    allCategories: categoryReducer,
    viscurricula: visualizationDisplayReducer,
})
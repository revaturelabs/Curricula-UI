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
    category: Category
}

export interface IState {
    allSkills: ISkillState
    allVisualizations: IVisualizationState
    allCurricula: ICurriculumState
    allCategories: ICategoryState
<<<<<<< HEAD
    newCategory: ICategoryState
=======
    viscurricula:IVistualizationDisplayState
>>>>>>> 81c689804e22e9a62c947736f891668a244a21c3
}

export const state = combineReducers<IState>({
    allSkills: skillsReducer,
    allVisualizations: visualizationReducer,
    allCurricula: curriculumReducer,
    allCategories: categoryReducer,
<<<<<<< HEAD
    newCategory: categoryReducer
=======
    viscurricula: visualizationDisplayReducer,
>>>>>>> 81c689804e22e9a62c947736f891668a244a21c3
})
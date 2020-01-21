import { IVisualizationState } from '.';
import { Visualization } from '../models/visualization';
import { visualizationTypes } from '../action-mappers/visualization-action-mapper';
import { Curriculum } from '../models/curriculum';
import { Skill } from '../models/skill';
import { Category } from '../models/category';

const initialState: IVisualizationState = {
    visualizations: [new Visualization(0, '', [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])]
}

export const visualizationReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case visualizationTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                visualizations: action.payload.allVisualizations
            }
        }
        case visualizationTypes.SUBMIT_SUCCESSFUL: {
            let visualizations = [...state.visualizations]
            visualizations.push(action.payload.visualization)
            return {
                ...state,
                visualizations,
                visualization: action.payload.visualization
            }
        }
        case visualizationTypes.SUBMIT_UNSUCCESSFUL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}
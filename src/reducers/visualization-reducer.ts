import { IVisualizationState } from '.';
import { Visualization } from '../models/visualization';
import { visualizationTypes } from '../action-mappers/view-all-visualization-action-mapper';
import { Curriculum } from '../models/curriculum';
import { Skill } from '../models/skill';
import { Category } from '../models/category';


const initialState: IVisualizationState = {
    allVisualizations: [new Visualization(0, '', [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])]
}

export const visualizationReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case visualizationTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                visualizationSet: action.payload.allVisualizations
            }
        }
        case visualizationTypes.UNSUCCESSFUL_GET_ALL: {
            return {
                ...state,
                message: 'No visualizations returned'
            }
        }
        default:
            return state
    }
}

import { IVisualizationState } from '.';
import { Visualization } from '../models/visualization';
import { visualizationTypes } from '../action-mappers/view-all-visualization-action-mapper';
import { Curriculum } from '../models/curriculum';
import { Skill } from '../models/skill';
import { Category } from '../models/category';


const initialVisualizationState: IVisualizationState = {
    allVisualizations: [new Visualization(0, '', [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])]
}

export const visualizationReducer = (state = initialVisualizationState, action: any) => {

    switch (action.type) {
        case visualizationTypes.SUCCESSFUL_GOT_ALL: {
            return {
                ...state,
                visualizationSet: action.payload.allVisualizations
            }
        }
        case visualizationTypes.UNSUCCESSFUL_GOT_ALL: {
            return {
                ...state,
                message: 'No visualizations returned'
            }
        }
        case visualizationTypes.SUBMIT_SUCCESSFUL: {
            return {
                ...state,
                visualization: action.payload.visualization
            }
        }
        case visualizationTypes.SUBMIT_UNSUCCESSFUL: {
            return {
                ...state,
                message: 'New visualization not created'
            }
        }
        default:
            return state
    }
}

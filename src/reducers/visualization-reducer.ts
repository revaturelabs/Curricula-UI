import { IVisualizationState } from '.';
import { Visualization } from '../models/visualization';
import { vizTypes } from '../action-mappers/ViewAllVizAction';
import { Curriculum } from '../models/curriculum';
import { Skill } from '../models/skill';
import { Category } from '../models/category';


const initialVisualizationState: IVisualizationState = {
    allVisualizations: [new Visualization(0, '', [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])]
}

export const visualizationReducer = (state = initialVisualizationState, action: any) => {

    switch (action.type) {
        case vizTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                visualizationSet: action.payload.allVisualizations
            }
        }
        case vizTypes.UNSUCCESSFUL_GET_ALL: {
            return {
                ...state,
                message: 'No visualizations returned'
            }
        }
        case vizTypes.SUBMIT_SUCCESSFUL: {
            return {
                ...state,
                visualization: action.payload.visualization
            }
        }
        case vizTypes.SUBMIT_UNSUCCESSFUL: {
            return {
                ...state,
                message: 'New visualization not created'
            }
        }
        default:
            return state
    }
}

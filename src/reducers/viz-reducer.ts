import { IVizState } from '.';
import { Visualization } from '../models/visualization';
import { vizTypes } from '../action-mappers/ViewAllVizAction';


const initialVizState: IVizState = {
    visualizations: [],
    newVisualization: new Visualization(0, '', [])
}

export const vizReducer = (state = initialVizState, action: any) => {

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

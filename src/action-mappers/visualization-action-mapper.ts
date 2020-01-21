import { apiGetAllVisualizations, apiSubmitVisualization } from "../remote/curricula-visualization"
import { Visualization } from "../models/visualization"


export const visualizationTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_VISUALIZATIONS_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_VISUALIZATIONS_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'VISUALIZATION_CREATED_SUCCESSFULLY',
    SUBMIT_UNSUCCESSFUL: 'VISUALIZATIONS_SUBMIT_UNSUCCESSFUL'
}

export const getAllVisualizations = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllVisualizations()
        if (res.status === 200) {
            dispatch({
                type: visualizationTypes.SUCCESSFUL_GET_ALL,
                payload: {
                    allVisualizations: res.body
                }
            })
        } else {
            dispatch({
                type: visualizationTypes.UNSUCCESSFUL_GET_ALL
            })
        }
    } catch (error) {
        dispatch({
            type: visualizationTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

export const postSubmitVisualization = (newVisualization: Visualization) => async (dispatch: any) => {
    try {
        let res = await apiSubmitVisualization(newVisualization)
        if (res.status === 200) {
            dispatch({
                type: visualizationTypes.SUBMIT_SUCCESSFUL,
                payload: {
                    visualization: res.body
                }
            })
            return res
        } else {
            dispatch({
                type: visualizationTypes.SUBMIT_UNSUCCESSFUL
            })
        }
    } catch (error) {
        dispatch({
            type: visualizationTypes.SUBMIT_UNSUCCESSFUL
        })
    }
}
import { apiGetVisualizationByName } from "../remote/curricula-visualization-display"

export const visualizationNameTypes = {
    GET_BY_NAME_SUCCESSFUL: 'GET_VISUALIZATION_BY_NAME_SUCCESSFUL',
    GET_BY_NAME_UNSUCCESSFUL: 'FAILED_TO_GET_VISUALIZATION_BY_NAME'
}

export const getVisualizationByName = (name: string) => async (dispatch: any) => {
    try {
        let res = await apiGetVisualizationByName(name)
        if (res.status === 200) {
            dispatch({
                type: visualizationNameTypes.GET_BY_NAME_SUCCESSFUL,
                payload: {
                    allCurricula: res.body
                }
            })
        } else {
            dispatch({
                type: visualizationNameTypes.GET_BY_NAME_UNSUCCESSFUL
            })
        }
    } catch (error) {
        dispatch({
            type: visualizationNameTypes.GET_BY_NAME_UNSUCCESSFUL
        })
    }
}
import { apiGetVisualizationByName } from "../remote/curricula-visualization-display"

export const visualizationNameTypes = {
    SUCCESSFUL_VISUALIZATION_DISPLAY: 'VISUALIZATION_NAME_SUCCESSFUL',
    UNSUCCESSFUL_VISUALIZATION_DISPLAY: 'VISUALIZATION_NAME_UNSUCCESSFUL'
}

export const getVisualizationByName = () => async (dispatch: any) => {
    try {
        let res = await apiGetVisualizationByName()
        if (res.status === 200) {
            dispatch({
                type: visualizationNameTypes.SUCCESSFUL_VISUALIZATION_DISPLAY,
                payload: {
                    allCurricula: res.body
                }
            })
        } else {
            dispatch({
                type: visualizationNameTypes.UNSUCCESSFUL_VISUALIZATION_DISPLAY
            })
        }
    } catch (e) {
        dispatch({
            type: visualizationNameTypes.UNSUCCESSFUL_VISUALIZATION_DISPLAY
        })
    }
}
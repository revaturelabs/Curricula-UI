import { apiGetAllVisualizations } from "../remote/curricula-visualization"


export const visualizationTypes = {
    SUCCESSFUL_GET_ALL: 'VISUALIZATIONS_SUCCESSFUL_GET_ALL',
    UNSUCCESSFUL_GET_ALL: 'VISUALIZATIONS_UNSUCCESSFUL_GET_ALL'
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
    } catch (e) {
        dispatch({
            type: visualizationTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}

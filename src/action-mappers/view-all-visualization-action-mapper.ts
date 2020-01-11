import { apiGetAllVisualizations } from "../remote/CurriculaVisualization"


export const visualizationTypes = {
    SUCCESSFUL_GOT_ALL: 'GOT_ALL_VISUALIZATIONS_SUCCESSFUL',
    UNSUCCESSFUL_GOT_ALL: 'GOT_ALL_VISUALIZATIONS_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUBMIT_VISUALIZATIONS_SUCCESSFUL',
    SUBMIT_UNSUCCESSFUL: 'SUBMIT_VISUALIZATIONS_UNSUCCESSFUL'
}

export const getAllVisualizations = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllVisualizations()
        if (res.status === 200) {
            dispatch({
                type: visualizationTypes.SUCCESSFUL_GOT_ALL,
                payload: {
                    allViz: res.body
                }
            })
        } else {
            dispatch({
                type: visualizationTypes.UNSUCCESSFUL_GOT_ALL
            })
        }
    } catch (e) {
        dispatch({
            type: visualizationTypes.UNSUCCESSFUL_GOT_ALL
        })
    }
}

// export const submitVisualization = () => async (dispatch: any) => {
//     try {
//         let res = await apiSubmitVisualization()
//         if (res.status === 200) {
//             dispatch({
//                 type: vizTypes.SUBMIT_SUCCESSFUL,
//                 payload: {
//                     message: 'Successfully Submitted'
//                 }
//             })
//         } else {
//             dispatch({
//                 type: vizTypes.SUBMIT_UNSUCCESSFUL
//             })
//         }
//     } catch (e) {
//         dispatch({
//             type: vizTypes.SUBMIT_UNSUCCESSFUL
//         })
//     }
// }







// export enum VizActionTypes {
//     GET_ALL = 'GET_ALL'
// }

// export const vizActionTypes = {
//     GET_ALL: 'GET_ALL'
// }

// export interface IVizGetAllAction {
//     type: vizActionTypes;
//     visualizations: IViz[];
// }

//export type VizActions = IVizGetAllAction;

// export const getAllViz: ActionCreator<ThunkAction<Promise<any>, IVizState, null, any>
//     > = () => {
//         return async (dispatch: Dispatch) => {
//             try {
//                 const response = await axios.get('https://add-URL-here');
//                 dispatch({
//                     visualizations: response.data.results
//                 });
//             } catch (err) {
//                 console.error(err);
//             }
//         };
// };

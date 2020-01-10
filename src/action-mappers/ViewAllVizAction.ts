import { apiGetAllVisualizations } from "../remote/CurriculaVisualization"


export const vizTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_VIZ_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_VIZ_UNSUCCESSFUL',
    SUBMIT_SUCCESSFUL: 'SUBMIT_VIZ_SUCCESSFUL',
    SUBMIT_UNSUCCESSFUL: 'SUBMIT_VIZ_UNSUCCESSFUL'
}

export const getAllVisualizations = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllVisualizations()
        if (res.status === 200) {
            dispatch({
                type: vizTypes.SUCCESSFUL_GET_ALL,
                payload: {
                    allViz: res.body
                }
            })
        } else {
            dispatch({
                type: vizTypes.UNSUCCESSFUL_GET_ALL
            })
        }
    } catch (e) {
        dispatch({
            type: vizTypes.UNSUCCESSFUL_GET_ALL
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

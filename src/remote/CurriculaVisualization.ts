import { client } from './CurriculaClient'

export async function apiGetAllVisualizations() {
    const response = await client.get('/visualizations')
    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'check visualizations'
            }
        }
    } catch (e) {
        return {
            status: response.status,
            body: 'check again'
        }
    }
}

// The following function will be useful for Creating a Visualization

// export async function apiSubmitVisualization() {
//     const response = await client.get('/visualizations')
//     try {
//         if (response.status === 200) {
//             return {
//                 status: response.status,
//                 body: response.data
//             }
//         } else {
//             return {
//                 status: response.status,
//                 body: 'Visualization was not created'
//             }
//         }
//     } catch (e) {
//         return {
//             status: response.status,
//             body: 'Something went wrong on our end'
//         }
//     }
// }
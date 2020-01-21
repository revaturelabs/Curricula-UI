import { curriculaClient } from "./curricula-client";

export async function apiGetVisualizationByName(visualizationName: string) {
    const response = await curriculaClient.get('/vis/visualizations/' + visualizationName)

    try {
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: 'Failed to get visualization by name'
            }
        }
    } catch (error) {
        return {
            status: response.status,
            body: 'Failed to get visualization by name'
        }
    }
}
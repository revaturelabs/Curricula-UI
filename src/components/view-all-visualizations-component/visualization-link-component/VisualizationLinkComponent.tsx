import React from 'react'
import { Visualization } from '../../../models/visualization';

interface IVisualizationLinkComponentProps {
    visualization: Visualization
}

export class VisualizationLinkComponent extends React.PureComponent<IVisualizationLinkComponentProps>{

    render() {
        return(
            <p>
                {process.env.BASE_URL}/visualizations/{this.props.visualization.visualizationName}
            </p>
        )
    }
}
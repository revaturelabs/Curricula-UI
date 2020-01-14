import React from 'react'
import { Visualization } from '../../../models/visualization';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button } from '@material-ui/core';

interface IVisualizationLinkComponentProps {
    visualization: Visualization
}

export class VisualizationLinkComponent extends React.PureComponent<IVisualizationLinkComponentProps>{

    render() {
        return (
            <div>
                <Link to={`${process.env.BASE_URL}/visualizations/${this.props.visualization.visualizationName}`}>
                    {process.env.BASE_URL}/visualizations/{this.props.visualization.visualizationName}
                </Link>
                <CopyToClipboard text={`${process.env.BASE_URL}/visualizations/${this.props.visualization.visualizationName}`}>
                    <Button variant="contained" color="primary">Copy to clipboard</Button>
                </CopyToClipboard>
            </div>

        )
    }
}
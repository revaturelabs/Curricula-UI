import React from 'react'
import { Visualization } from '../../../models/visualization';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import {  } from '@material-ui/core';
import clipboard from '../../../assests/clipboard.png' 


interface IVisualizationLinkComponentProps {
    visualization: Visualization
}

export class VisualizationLinkComponent extends React.PureComponent<IVisualizationLinkComponentProps>{

    render() {
        return (
            <div>
                <Link to={`/visualizations/${this.props.visualization.visualizationName}`}>
                    {process.env.BASE_URL}/visualizations/{this.props.visualization.visualizationName}
                </Link>
                <CopyToClipboard text={`${process.env.BASE_URL}/visualizations/${this.props.visualization.visualizationName}`}>
                    <img src={clipboard} alt="clipboard-source: https://user-images.githubusercontent.com/35342691/34890669-d3a7694e-f7a0-11e7-8ebe-bc926c10c328.png" color="primary" />
                </CopyToClipboard>
            </div>

        )
    }
}
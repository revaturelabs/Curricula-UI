import React from 'react'
import { Visualization } from '../../../models/visualization';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Icon } from '@material-ui/core';
import '../ViewAllVisualizations.css'
import { environment } from '../../../environment';

interface IVisualizationLinkComponentProps {
    visualization: Visualization
    updateClipboardIcon: (visualizationId: number) => void
    clipboard: string
}

export class VisualizationLinkComponent extends React.PureComponent<IVisualizationLinkComponentProps>{

    render() {
        return (
            <div className="visualizationsBlockElement">
                <Button variant="contained" color = "primary">
                    <Link className = "linkVizAllTextColor" to={`/visualizations/${this.props.visualization.visualizationName}`}>
                        {this.props.visualization.visualizationName}
                    </Link>
                </Button>
                <Button >
                    <CopyToClipboard text={`${environment.UIBaseUrl}/visualizations/${this.props.visualization.visualizationName}`}>
                        <Icon className='clipboard' onClick={()=>{this.props.updateClipboardIcon(this.props.visualization.visualizationId)}}>{this.props.clipboard}</Icon>
                    </CopyToClipboard>
                </Button>

            </div>

        )
    }
}
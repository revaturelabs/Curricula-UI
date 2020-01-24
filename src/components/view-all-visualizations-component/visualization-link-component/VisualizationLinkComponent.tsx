import React from 'react'
import { Visualization } from '../../../models/visualization';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Icon, Grid } from '@material-ui/core';
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
                <Grid container justify="center">
                    <Grid item>
                        <Button id="visualizationLinkBtn" color="primary" component={Link} to={`/vis/visualizations/${this.props.visualization.visualizationName}`} variant="contained">
                            {this.props.visualization.visualizationName}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button>
                            <CopyToClipboard text={`${environment.UIBaseUrl}/vis/visualizations/${this.props.visualization.visualizationName}`}>
                                <Icon className='clipboard' onClick={() => { this.props.updateClipboardIcon(this.props.visualization.visualizationId) }}>{this.props.clipboard}</Icon>
                            </CopyToClipboard>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
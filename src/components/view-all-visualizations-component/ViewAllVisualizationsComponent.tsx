import React from 'react'
import { Visualization } from '../../models/visualization';
import { VisualizationLinkComponent } from './visualization-link-component/VisualizationLinkComponent';
import NavBarComponent from '../navbar-component/NavBarComponent'
import { TextField, Grid } from '@material-ui/core';

interface IVisualizationsProps {
    getAllVisualizations: () => void
    getAllSkills: () => void
    getAllCurricula: () => void
    getAllCategories: () => void
    allVisualizations: Visualization[]
}

interface IVisualizationsState {
    search: string
    clipboard: string
    checkmark: string
    clipboardIdToChange: number
}

export class ViewAllVisualizationsComponent extends React.Component<IVisualizationsProps, IVisualizationsState>{
    constructor(props: any) {
        super(props);
        this.state = {
            search: '',
            clipboard: 'assignment',
            checkmark: 'check',
            clipboardIdToChange: 0
        }
    }

    async componentDidMount() {
        this.props.getAllVisualizations()
        this.props.getAllSkills()
        this.props.getAllCurricula()
        this.props.getAllCategories()
    }

    updateSearch = (input: any) => {
        this.setState({
            ...this.state,
            search: input.target.value
        })
    }

    updateClipboardIcon = (visualizationId: number) => {
        this.setState({
            ...this.state,
            clipboardIdToChange: visualizationId
        })
    }

    render() {
        let visualizationsToRender = this.props.allVisualizations.filter((visualization) => {
            if (visualization.visualizationName.toLowerCase().includes(this.state.search.toLowerCase())) {
                return true
            } else {
                return false
            }
        }).map((visualization) => {
            if (visualization.visualizationId === this.state.clipboardIdToChange) {
                return <VisualizationLinkComponent clipboard={this.state.checkmark} updateClipboardIcon={this.updateClipboardIcon} visualization={visualization} key={visualization.visualizationId} />
            } else {
                return <VisualizationLinkComponent clipboard={this.state.clipboard} updateClipboardIcon={this.updateClipboardIcon} visualization={visualization} key={visualization.visualizationId} />
            }
        })
        return (
            <div>
                <NavBarComponent />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item>
                        <TextField
                            style={{ width: 500 }}
                            variant="outlined"
                            value={this.state.search}
                            onChange={this.updateSearch}
                            placeholder="Visualization"
                            label="Search Visualizations"
                            inputProps={{ 'aria-label': 'search visualizations' }}
                        />
                    </Grid >
                </Grid>
                {visualizationsToRender}
            </div>
        )
    }
}
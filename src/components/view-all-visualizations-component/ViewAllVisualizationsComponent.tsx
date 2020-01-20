import React from 'react'
import { Visualization } from '../../models/visualization';
import { VisualizationLinkComponent } from './visualization-link-component/VisualizationLinkComponent';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';


interface IVisualizationsProps {
    allVisualizations: Visualization[]
    getAllVisualizations: () => void
    getAllSkills: () => void
    getAllCurricula: () => void
    getAllCategories: () => void
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
                    
                <Paper component="form">
                    <InputBase
                        value={this.state.search}
                        onChange={this.updateSearch}
                        placeholder="Search Visualizations"
                        inputProps={{ 'aria-label': 'search visualizations' }}
                    />
                </Paper>
                {visualizationsToRender}
            </div>
        )
    }
}
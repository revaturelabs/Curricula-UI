import React from 'react'
import { Visualization } from '../../models/visualization';
import { Link } from 'react-router-dom';
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
}

export class ViewAllVisualizationsComponent extends React.Component<IVisualizationsProps, IVisualizationsState>{
    constructor(props: any) {
        super(props);
        this.state = {
            search: ''
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

    render() {
        let visualizationsToRender = this.props.allVisualizations.filter((visualization) => {
            if (visualization.visualizationName.toLowerCase().includes(this.state.search.toLowerCase())) {
                return true
            } else {
                return false
            }
        }).map((visualization) => {
            return <VisualizationLinkComponent visualization={visualization} key = {visualization.visualizationId}/>
        })

        return (
            <div>
                <Link to="/createcurriculumpage"> <p>Visualization Page :D</p> </Link>
                <Link to="/search"> <p>Search Curriculum</p> </Link>
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
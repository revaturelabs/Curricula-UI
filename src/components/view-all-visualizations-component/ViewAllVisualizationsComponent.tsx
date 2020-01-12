import React from 'react'
import { Visualization } from '../../models/visualization';
import { Link } from 'react-router-dom';

interface IVisualizationsProps {
    visualizations: Visualization[]
    getAllVisualizations: () => void
    getAllSkills: () => void
    getAllCurricula: () => void
    getAllCategories: () => void
}

export class ViewAllVisualizationsComponent extends React.Component<IVisualizationsProps, any>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        this.props.getAllVisualizations()
        this.props.getAllSkills()
        this.props.getAllCurricula()
        this.props.getAllCategories()
    }

    render() {
        return (
            <div>
               <Link to="/createcurriculumpage"> <p>Visualization Page :D</p> </Link>
            </div>
        )

    }
}
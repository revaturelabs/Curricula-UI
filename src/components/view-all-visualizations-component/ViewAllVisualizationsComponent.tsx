import React from 'react'
import { Visualization } from '../../models/visualization';

interface IVisualizationsProps {
    visualizations: Visualization[]
    getAllVisualizations: () => void
    getAllSkills: () => void
    getAllCurricula: () => void
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
    }

    render() {
        return (
            <div>
                <p>Visualization Page :D</p>
            </div>
        )

    }
}
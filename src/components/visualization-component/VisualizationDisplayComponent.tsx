import React from "react";
import { Curriculum } from "../../models/curriculum";
import { apiGetVisualizationByName } from "../../remote/curricula-visualization-display";

interface IVisualizationComponentstate {
    curricula: Curriculum[]
}


export class VisualizationComponent extends React.Component<any, IVisualizationComponentstate>{

    constructor(props: any) {
        super(props)
        this.state = {
            curricula: []
        }

    }

    async componentDidMount() {
        try {
            let c = await apiGetVisualizationByName()
            if (c.status === 200) {
                this.setState({
                    ...this.state,
                    curricula: c.body
                })
            }
        } catch (e) {
            console.log(e);
        
    }
    render(){
        let rows = this.state.curricula.map((e) => {
            return <
        })
    }
}
import React from "react";
import { apiGetVisualizationByName } from "../../remote/curricula-visualization-display";
import { Visualization } from "../../models/visualization";
import { Curriculum } from "../../models/curriculum";
import { CurriculaSelectionComponent } from "./curricula-selection-component/CurriculaSelectionComponent";

interface IVisualizationComponentstate {
    visualization: Visualization
    activeCurriculum: Curriculum
}


export class VisualizationComponent extends React.Component<any, IVisualizationComponentstate>{

    constructor(props: any) {
        super(props)
        this.state = {
            visualization: new Visualization(0,'',[]),
            activeCurriculum: new Curriculum(0,'',[])
        }

    }

    async componentDidMount() {
        let visualizationName = this.props.match.params.visualization
        
        try {
            let res = await apiGetVisualizationByName(visualizationName)
            if (res.status === 200 && res.body) {
                this.setState({
                    ...this.state,
                    visualization: res.body
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    updateActiveCurriculum = (curriculum: Curriculum) => {
        this.setState({
            ...this.state,
            activeCurriculum: curriculum
        })
    }

    render(){

        return(
            <div>
                <CurriculaSelectionComponent updateActiveCurriculum={this.updateActiveCurriculum} curricula={this.state.visualization.curricula} />
            </div>
        )
    }
}
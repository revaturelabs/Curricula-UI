import React from 'react'
import { Visualization } from '../../models/visualization';

interface IVizProps {
    submitVisualization: (newVisualization: any) => void
}

export class ViewAllVizComponent extends React.Component<IVizProps, any>{
    constructor(props:any){
        super(props);
        this.state = {
            allVisualizations: []
        };
    }

    render(){
        return (
            <ul>
                {this.state.allVisualizations.map((v:Visualization) => {
                    return <div>
                        <p>{v.visualizationName}</p>
                    </div>

                })}
            </ul>
        ) 

    }
}
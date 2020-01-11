import React from 'react'
import { Visualization } from '../../models/visualization';

// interface IVizProps {
//     submitVisualization: (newVisualization: any) => void
// }

export class ViewAllVizComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>

            </div>
            // <ul>
            //     {this.state.allVisualizations.map((v: Visualization) => {
            //         return <div>
            //             <p>{v.visualizationName}</p>
            //         </div>

            //     })}
            // </ul>
        )

    }
}
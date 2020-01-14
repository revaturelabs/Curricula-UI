import React from 'react'
import { Curriculum } from '../../../models/curriculum';
import { Paper, Button } from '@material-ui/core';

interface ICurriculaSelectionComponentProps {
    curricula: Curriculum[]
    updateActiveCurriculum: (curriculum: Curriculum) => void
}

export class CurriculaSelectionComponent extends React.PureComponent<ICurriculaSelectionComponentProps> {

    render () {

        let rows = this.props.curricula.map((curriuclum) => {
            return( 
                <div>
                    <Button onMouseEnter={()=>{this.props.updateActiveCurriculum(curriuclum)}}>{curriuclum.curriculumName}</Button>
                </div>
            )
        })

        return (
            <Paper elevation={1}>
                {rows}
            </Paper>
        )
    }
}

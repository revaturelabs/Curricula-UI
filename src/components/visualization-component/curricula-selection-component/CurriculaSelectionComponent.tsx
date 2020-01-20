import React from 'react'
import { Curriculum } from '../../../models/curriculum';
import { Paper, Button } from '@material-ui/core';
import '../Visualization.css'

interface ICurriculaSelectionComponentProps {
    curricula: Curriculum[]
    updateActiveCurriculum: (curriculum: Curriculum) => void
}

export class CurriculaSelectionComponent extends React.PureComponent<ICurriculaSelectionComponentProps> {


    render() {
        let rows = this.props.curricula.map((curriculum) => {
            return (
                <div>
                    <Button className="vizCurriculaSection" onMouseEnter={() => { this.props.updateActiveCurriculum(curriculum) }}>
                        {curriculum.curriculumName}
                    </Button>
                </div>
            )
        })

        return (
            <div >
                <Paper elevation={2}>
                    {rows}
                </Paper>
            </div>
        )
    }
}

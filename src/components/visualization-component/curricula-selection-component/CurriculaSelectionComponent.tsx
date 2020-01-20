import React from 'react'
import { Curriculum } from '../../../models/curriculum';
import { Paper, ListItem } from '@material-ui/core';
import '../Visualization.css'

interface ICurriculaSelectionComponentProps {
    curricula: Curriculum[]
    updateActiveCurriculum: (curriculum: Curriculum) => void
    activeCurriculum: Curriculum
}

export class CurriculaSelectionComponent extends React.PureComponent<ICurriculaSelectionComponentProps> {


    render() {
        let rows = this.props.curricula.map((curriculum) => {
            return (
                <div>
                    <ListItem className="vizCurriculaSection" selected={curriculum === this.props.activeCurriculum} onMouseEnter={() => { this.props.updateActiveCurriculum(curriculum) }}>
                        {curriculum.curriculumName}
                    </ListItem>
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

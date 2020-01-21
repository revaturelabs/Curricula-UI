import React from 'react'
import { Curriculum } from '../../../models/curriculum';
import { Paper, ListItem } from '@material-ui/core';
import '../Visualization.css'

interface ICurriculaSelectionComponentProps {
    updateActiveCurriculum: (curriculum: Curriculum) => void
    curricula: Curriculum[]
    activeCurriculum: Curriculum
}

export class CurriculaSelectionComponent extends React.PureComponent<ICurriculaSelectionComponentProps> {

    render() {
        let rows = this.props.curricula.map((curriculum) => {
            if (curriculum === this.props.activeCurriculum) {
                return (
                    <div>
                        <Paper elevation={8}>
                            <ListItem className="vizCurriculaSection" onMouseEnter={() => { this.props.updateActiveCurriculum(curriculum) }}>
                                {curriculum.curriculumName}
                            </ListItem>
                        </Paper>
                    </div>
                )
            } else {
                return (
                    <div>
                        <ListItem className="vizCurriculaSection" onMouseEnter={() => { this.props.updateActiveCurriculum(curriculum) }}>
                            {curriculum.curriculumName}
                        </ListItem>
                    </div>
                )
            }

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
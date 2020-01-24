import React from "react";
import { apiGetVisualizationByName } from "../../remote/curricula-visualization-display";
import { Visualization } from "../../models/visualization";
import { Curriculum } from "../../models/curriculum";
import { CurriculaSelectionComponent } from "./curricula-selection-component/CurriculaSelectionComponent";
import { Chip, Paper, Container, Grid } from "@material-ui/core";
import { Skill } from "../../models/skill";
import { Category } from "../../models/category";
import COLORS from "../../colors";
import './Visualization.css'

interface IVisualizationComponentstate {
    visualization: Visualization
    activeCurriculum: Curriculum
    colors: string[]
}

export class VisualizationComponent extends React.Component<any, IVisualizationComponentstate>{
    constructor(props: any) {
        super(props)
        this.state = {
            visualization: new Visualization(0, '', []),
            activeCurriculum: new Curriculum(0, '', []),
            colors: COLORS
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
        } catch (error) {
            console.log(error);
        }
    }

    compare(skill1: Skill, skill2: Skill) {
        if (skill1.category.categoryId > skill2.category.categoryId) {
            return 1;
        }
        if (skill1.category.categoryId < skill2.category.categoryId) {
            return -1;
        }
        return 0;
    }

    updateActiveCurriculum = (curriculum: Curriculum) => {
        this.setState({
            ...this.state,
            activeCurriculum: curriculum
        })
    }

    render() {
        let allSkills: Skill[] = []
        let allSkillIds: number[] = []
        let categoriesInLegend: Category[] = []
        for (let curriculum of this.state.visualization.curricula) {
            for (let skill of curriculum.skills) {
                if (!allSkillIds.includes(skill.skillId)) {
                    allSkills.push(skill)
                    allSkillIds.push(skill.skillId)
                }
            }
        }

        let activeCurriculumSkillIds = this.state.activeCurriculum.skills.map((skill) => {
            return skill.skillId
        })

        allSkills.sort(this.compare)
        let categoryId = 0
        let colorIncrementor = 0
        let skillsToDisplay = allSkills.map((skill) => {
            if (categoryId !== skill.category.categoryId) {
                categoryId = skill.category.categoryId
                colorIncrementor++
                categoriesInLegend.push(skill.category)
            }
            if (activeCurriculumSkillIds.includes(skill.skillId)) {
                return <Chip label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[colorIncrementor] }} />
            } else {
                return <Chip label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[colorIncrementor], opacity: 0.30 }} />
            }
        })

        let legend = categoriesInLegend.map((category) => {
            return <div><Chip label={category.categoryName.toUpperCase()} className="categoryLegendCurriculumShow" key={category.categoryId} style={{ backgroundColor: this.state.colors[categoriesInLegend.indexOf(category) + 1] }}></Chip></div>
        })

        return (
            <Container className="visualuzationContainer" component="main" maxWidth="xl">
                <Grid container spacing={1} justify="space-evenly">

                    <Grid item lg={4}>
                        <CurriculaSelectionComponent
                            updateActiveCurriculum={this.updateActiveCurriculum}
                            curricula={this.state.visualization.curricula}
                            activeCurriculum={this.state.activeCurriculum} />
                    </Grid>

                    <Grid item lg={6}>
                        {skillsToDisplay}
                    </Grid>

                    <Grid item lg={2}>
                        <Paper elevation={2}>
                            {legend}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
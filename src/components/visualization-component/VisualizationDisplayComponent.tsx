import React from "react";
import { apiGetVisualizationByName } from "../../remote/curricula-visualization-display";
import { Visualization } from "../../models/visualization";
import { Curriculum } from "../../models/curriculum";
import { CurriculaSelectionComponent } from "./curricula-selection-component/CurriculaSelectionComponent";
import { Chip, Paper } from "@material-ui/core";
import { Skill } from "../../models/skill";
import { Category } from "../../models/category";

interface IVisualizationComponentstate {
    visualization: Visualization
    activeCurriculum: Curriculum
    colors: string[]
}


export class VisualizationComponent extends React.Component<any, IVisualizationComponentstate>{

    constructor(props: any) {
        super(props)
        this.state = {
            visualization: new Visualization(0,'',[]),
            activeCurriculum: new Curriculum(0,'',[]),
            colors: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
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

    compare(a: any, b: any) {
        if (a.category.categoryId > b.category.categoryId) {
            return 1;
        }
        if (a.category.categoryId < b.category.categoryId) {
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

    render(){

        let allSkills: Skill[] = []
        let categoriesInLegend: Category[] = []
        for (let curriculum of this.state.visualization.curricula) {
            for (let skill of curriculum.skills) {
                if(allSkills.includes(skill)){

                } else {
                    allSkills.push(skill)
                }
            }
        }

        let categoryId = 0
        let colorIncrementor= 0
        let skillsToDisplay = allSkills.sort(this.compare).map((skill) => {
            if(categoryId !== skill.category.categoryId){
                categoryId = skill.category.categoryId
                colorIncrementor++
                categoriesInLegend.push(skill.category)
            }
            if(this.state.activeCurriculum.skills.includes(skill)){
                return <Chip label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[colorIncrementor] }} />
            } else {
                return <Chip label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[colorIncrementor], opacity: 0.6 }} />
            }
        })        

        let legend = categoriesInLegend.map((category) => {
            return <div><p>{category.categoryName}: </p><Chip className="skillPillCurriculum" key={category.categoryId} style={{ backgroundColor: this.state.colors[categoriesInLegend.indexOf(category) + 1] }}></Chip></div>
        })

        return(
            <div>
                <CurriculaSelectionComponent updateActiveCurriculum={this.updateActiveCurriculum} curricula={this.state.visualization.curricula} />
                <div>
                    {skillsToDisplay}
                </div>
                <Paper elevation={1}>{legend}</Paper>
            </div>
        )
    }
}
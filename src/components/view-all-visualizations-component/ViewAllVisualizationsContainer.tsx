import { IState } from "../../reducers"
import { getAllVisualizations } from "../../action-mappers/view-all-visualization-action-mapper"
import { getAllSkills } from "../../action-mappers/skill-pill-action-mapper"
import { getAllCurricula } from "../../action-mappers/curriculum-action-mapper"
import { connect } from "react-redux"
import { ViewAllVisualizationsComponent } from "./ViewAllVisualizationsComponent"


const mapStateToProps = (state: IState) => {
    return {
        allVisualizations: state.allVisualizations.visualizations,
        allSkills: state.allSkills.skills,
        allCurricula: state.allCurricula.curricula
    }
}

const mapDispatchToProps = {
    getAllVisualizations,
    getAllSkills,
    getAllCurricula
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVisualizationsComponent);

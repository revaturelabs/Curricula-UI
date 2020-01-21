import { IState } from "../../reducers"
import { getAllVisualizations } from "../../action-mappers/visualization-action-mapper"
import { getAllSkills } from "../../action-mappers/skill-action-mapper"
import { getAllCurricula } from "../../action-mappers/curriculum-action-mapper"
import { getAllCategories } from "../../action-mappers/category-action-mapper"
import { connect } from "react-redux"
import { ViewAllVisualizationsComponent } from "./ViewAllVisualizationsComponent"

const mapStateToProps = (state: IState) => {
    return {
        allVisualizations: state.allVisualizations.visualizations,
    }
}

const mapDispatchToProps = {
    getAllVisualizations,
    getAllSkills,
    getAllCurricula,
    getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVisualizationsComponent);
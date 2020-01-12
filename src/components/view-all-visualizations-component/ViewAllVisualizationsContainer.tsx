import { IState } from "../../reducers"
import { getAllVisualizations } from "../../action-mappers/view-all-visualization-action-mapper"
import { getAllSkills } from "../../action-mappers/skill-pill-action-mapper"
import { getAllCurricula } from "../../action-mappers/curriculum-action-mapper"
import { getAllCategories } from "../../action-mappers/category-action-mapper"
import { connect } from "react-redux"
import { ViewAllVisualizationsComponent } from "./ViewAllVisualizationsComponent"


const mapStateToProps = (state: IState) => {
    return {
        allVisualizations: state.allVisualizations.visualizations,
<<<<<<< HEAD:src/components/view-all-viz-component/ViewAllVisualizationsContainer.tsx
        allSkills: state.allSkills.skills
=======
        allSkills: state.allSkills.skills,
        allCurricula: state.allCurricula.curricula,
        allCategories: state.allCategories.categories
>>>>>>> 8ee99cc85780348939cd9b2cba2b6888a2532d0a:src/components/view-all-visualizations-component/ViewAllVisualizationsContainer.tsx
    }
}

const mapDispatchToProps = {
    getAllVisualizations,
    getAllSkills,
    getAllCurricula,
    getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVisualizationsComponent);

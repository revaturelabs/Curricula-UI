import { IState } from "../../reducers"
import { getAllVisualizations } from "../../action-mappers/view-all-visualization-action-mapper"
import { connect } from "react-redux"
import { ViewAllVizComponent } from "./ViewAllVisualizationsPageComponent"


const mapStateToProps = (state: IState) => {
    return {
        allVisualizations: state.allVisualizations.visualizations
    }
}

const mapDispatchToProps = {
    getAllVisualizations
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVizComponent);

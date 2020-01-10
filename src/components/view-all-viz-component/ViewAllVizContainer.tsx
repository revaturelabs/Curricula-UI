import { IState } from "../../reducers"
import { getAllVisualizations } from '../../action-mappers/ViewAllVizAction'
import { ViewAllVizComponent } from "./ViewAllVizComponent"
import { connect } from "react-redux"

const mapStateToProps = (state: IState) => {
    return {
        allVisualizations: state.visualizationSet.visualizations
    }
}

const mapDispatchToProps = {
    getAllVisualizations
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVizComponent);

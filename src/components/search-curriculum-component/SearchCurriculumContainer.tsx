import { IState } from "../../reducers"
import { connect } from "react-redux"
import { SearchCurriculumComponent } from "./SearchCurriculumComponent"
import { postSubmitVisualization } from "../../action-mappers/visualization-action-mapper"

const mapStateToProps = (state: IState) => {
    return {
        allCurricula: state.allCurricula.curricula
    }
}

const mapDispatchToProps = {
    postSubmitVisualization
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCurriculumComponent);

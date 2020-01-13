import { IState } from "../../reducers"
import { connect } from "react-redux"
import { SearchCurriculumComponent } from "./SearchCurriculumComponent"


const mapStateToProps = (state: IState) => {
    return {
        allCurricula: state.allCurricula.curricula
    }
}

export default connect(mapStateToProps)(SearchCurriculumComponent);

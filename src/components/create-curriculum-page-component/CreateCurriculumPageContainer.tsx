import { IState } from "../../reducers"
import { connect } from "react-redux"
import { postSubmitCurriculum, getAllSkills } from '../../action-mappers/skill-pill-action-mapper'
import { CreateCurriculumPageComponent } from './CreateCurriculumPageComponent'

const mapStateToProps = (state: IState) => {
    return {
        allSkills: state.allSkills.skills,
        allCurricula: state.allCurricula.curricula,
        allCategories: state.allCategories.categories
    }
}

const mapDispatchToProps = {
    postSubmitCurriculum,
    getAllSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculumPageComponent)
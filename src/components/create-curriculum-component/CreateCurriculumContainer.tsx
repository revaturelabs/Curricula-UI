import { IState } from "../../reducers"
import { connect } from "react-redux"
import { getAllSkills } from '../../action-mappers/skill-action-mapper'
import { postSubmitCurriculum } from '../../action-mappers/curriculum-action-mapper'
import { CreateCurriculumComponent } from './CreateCurriculumComponent'

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculumComponent)
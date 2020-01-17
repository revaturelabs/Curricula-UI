import { IState } from "../../reducers"
import { connect } from "react-redux"
import { getAllSkills } from '../../action-mappers/skill-pill-action-mapper'
import { postSubmitCurriculum } from '../../action-mappers/curriculum-action-mapper'
import { CreateCurriculumPageComponent } from './CreateCurriculumPageComponent'

const mapStateToProps = (state: IState) => {
    return {
        allSkillsMap: state.allSkills.skills,
        curriculaIdNum: state.allCurricula.curricula,
        allCategories: state.allCategories.categories
    }
}

const mapDispatchToProps = {
    postSubmitCurriculum,
    getAllSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculumPageComponent)
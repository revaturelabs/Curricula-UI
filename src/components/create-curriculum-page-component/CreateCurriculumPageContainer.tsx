import { IState } from "../../reducers"
import { connect } from "react-redux"
import { postSubmitCurriculum, getAllSkills } from '../../action-mappers/skill-pill-action-mapper'
import { CreateCurriculumPageComponent } from './CreateCurriculumPageComponent'

const mapStateToProps = (state: IState) => {
    return {
        allSkillsMap: state.allSkills.skillSet
    }
}

const mapDispatchToProps = {
    postSubmitCurriculum,
    getAllSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculumPageComponent)
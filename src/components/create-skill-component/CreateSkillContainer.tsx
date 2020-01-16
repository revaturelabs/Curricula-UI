import { IState } from "../../reducers"
import { connect } from "react-redux"
import { submitNewSkill } from "../../action-mappers/skill-pill-action-mapper"
import CreateSkillComponent  from "./CreateSkillComponent"

const mapStateToProps = (state : IState) => {
    return {
        categoriesToMap: state.allCategories.categories,
        newSkill: state.allSkills.newSkill,
        allSkills: state.allSkills.skills
    }
}

const mapDispatchToProps = {
    submitNewSkill
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSkillComponent)
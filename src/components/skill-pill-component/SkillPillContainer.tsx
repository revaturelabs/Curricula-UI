import { SkillPillComponent } from "./SkillPillComponent"
import { state } from "../../reducers"
import { connect } from "react-redux"

const mapStateToProps = (state: IState) => {
    return {
        allSkill: state.skill.allSkill
    }
}

const mapDispatchToProps ={
    getAllSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPillComponent)
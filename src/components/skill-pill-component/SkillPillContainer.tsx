import { SkillPillComponent } from "./SkillPillComponent"
import { IState } from "../../reducers"
import { connect } from "react-redux"

const mapStateToProps = (state: IState) => {
    return {
        allSkills: state.skillSet.skills
        
    }
}

const mapDispatchToProps ={
    getAllSkills
    submitCurriculum
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPillComponent)
import { SkillPillComponent } from "./SkillPillComponent"

const mapStateToProps = (state: IState) => {
    return {
        allSkill: state.skill.allSkill
    }
}

const mapDispatchToProps ={
    getAllSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPillComponent)
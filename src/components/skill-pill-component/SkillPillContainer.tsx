import { SkillPillComponent } from "./SkillPillComponent"
import { IState } from "../../reducers"
import { connect } from "react-redux"

const mapStateToProps = (state: IState) => {
    return {
        
    }
}

const mapDispatchToProps ={
   
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPillComponent)
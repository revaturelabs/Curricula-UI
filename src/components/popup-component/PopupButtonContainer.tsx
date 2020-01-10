
import { IState } from "../../reducers"
import { connect } from "react-redux"
import PopupButtonComponent from "./PopupButtonComponent"

const mapStateToProps = (state: IState, ownProps: any) => {
    return {
       
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupButtonComponent)
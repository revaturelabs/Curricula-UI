import { IState } from "../../reducers"
import { connect } from "react-redux"
import { CreateCategoryComponent } from './CreateCategoryComponent'
import { postNewCategory } from '../../action-mappers/category-action-mapper'

const mapStateToProps = (state: IState) => {
    return {
        returnedNewCategory: state.allCategories.category,
        allCategories: state.allCategories.categories
    }
}

const mapDispatchToProps = {
    postNewCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryComponent)

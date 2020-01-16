import { ICategoryState } from '.';
import { Category } from '../models/category';
import { categoryTypes } from '../action-mappers/category-action-mapper';


const initialState: ICategoryState = {
    categories: [new Category(0, '')],
    category: new Category(0,'')
}

export const categoryReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case categoryTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                categories: action.payload.allCategories
            }
        }
        case categoryTypes.UNSUCCESSFUL_POST_NEW_CATEGORY: {
            return {
                ...state,
            }
        }
        case categoryTypes.SUCCESSFUL_POST_NEW_CATEGORY: {
            let categories = [...state.categories]
            categories.push(action.payload.category)
            return {
                ...state,
                categories,
                category: action.payload.category
            }
        }
        default:
            return state
    }
}

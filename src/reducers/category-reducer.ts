import { ICategoryState } from '.';
import { Category } from '../models/category';
import { categoryTypes } from '../action-mappers/category-action-mapper';


const initialState: ICategoryState = {
    categories: [new Category(0, '')]
}

export const categoryReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case categoryTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                categories: action.payload.allCategories
            }
        }
        default:
            return state
    }
}

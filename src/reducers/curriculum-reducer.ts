import { ICurriculumState } from '.';
import { Curriculum } from '../models/curriculum';
import { Skill } from '../models/skill';
import { Category } from '../models/category';
import { curriculumTypes } from '../action-mappers/curriculum-action-mapper';


const initialState: ICurriculumState = {
    curricula: [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])],
    submitSuccess: false
}

export const curriculumReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case curriculumTypes.SUCCESSFUL_GET_ALL: {
            return {
                ...state,
                curricula: action.payload.allCurricula,
                submitSuccess: true
            }
        }
        default:
            return state
    }
}

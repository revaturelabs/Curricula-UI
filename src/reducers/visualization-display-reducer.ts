import { IVistualizationDisplayState } from "."
import { Curriculum } from "../models/curriculum"
import { visualizationNameTypes } from "../action-mappers/visualization-display-action-mapper"




const initialState: IVistualizationDisplayState = {
    viscurricula: [ new Curriculum(0, '', [])]
     }
    
    
    
     export const visualizationDisplayReducer = (state= initialState, action:any) => {
     
        
             switch (action.type) {
                 case visualizationNameTypes.SUCCESSFUL_VISUALIZATION_DISPLAY:{
                     //we return the new total state
                     //dont forget to spread
                     return {
                         ...state,
                         user:action.payload.user
                     }
                 }
                 default:
                    return state
       }
    
    
     }
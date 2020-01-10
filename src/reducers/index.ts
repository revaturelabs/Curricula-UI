import { combineReducers } from "redux";
import { Visualization } from "../models/visualization";
import { vizReducer } from "./viz-reducer";

export interface IVizState {
    visualizations: Visualization[],
    newVisualization: Visualization
}

export interface IState{
    visualizationSet: IVizState
    newVisualization: IVizState
}

export const state = combineReducers<IState>({
    visualizationSet: vizReducer,
    newVisualization: vizReducer
})
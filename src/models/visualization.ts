import { Curriculum } from "./curriculum";

export class Visualization {
    visualizationId: number;
    visualizationName: string;
    curricula: Curriculum[];

    constructor(visualizationId: number, visualizationName: string, curricula: Curriculum[]) {
        this.visualizationId = visualizationId;
        this.visualizationName = visualizationName;
        this.curricula = curricula;
    }
}
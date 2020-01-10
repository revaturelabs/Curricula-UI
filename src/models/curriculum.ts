import { Skill } from "./skill";

export class Curriculum {
    curriculumId: number;
    curriculumName: string;
    curriculumSkills: Skill[];

    constructor(curriculumId: number, curriculumName: string, curriculumSkills: Skill[]) {
        this.curriculumId = curriculumId,
        this.curriculumName = curriculumName,
        this.curriculumSkills = curriculumSkills
    }
}
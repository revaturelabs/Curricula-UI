import { Skill } from "./skill";

export class Curriculum {
    curriculumId: number;
    curriculumName: string;
    skills: Skill[];

    constructor(curriculumId: number, curriculumName: string, skills: Skill[]) {
        this.curriculumId = curriculumId
        this.curriculumName = curriculumName
        this.skills = skills
    }
}
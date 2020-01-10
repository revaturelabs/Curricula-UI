export class Curriculum {
    curriculumId: number;
    curriculumName: string;
    curriculumSkills: [];

    constructor(curriculumId: number, curriculumName: string, curriculumSkills: []) {
        this.curriculumId = curriculumId
        this.curriculumName = curriculumName
        this.curriculumSkills = curriculumSkills
    }
}
import { Category } from "./category"

export class Skill{
    skillId: number
    name: string
    category: Category

    constructor(skillId:number, skillName: string, category: Category){
        this.skillId = skillId
        this.name = skillName
        this.category = category
    }
}
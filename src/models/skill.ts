import { Category } from "./category"

export class Skill{
    id: number
    name: string
    category: Category

    constructor(skillId:number, skillName: string, category: Category){
        this.id = skillId
        this.name = skillName
        this.category = category
    }
}
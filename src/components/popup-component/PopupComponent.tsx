import React from "react"
import { Skill } from "../../models/skill"
import { Category } from "../../models/category"

interface IPopupComponentProps{
    newSkill: Skill,
    newCategory: Category
}

interface IPopupComponentStates{
    newSkill: Skill,
    newCategory: Category

}

export class PopupComponent extends React.Component<IPopupComponentProps,IPopupComponentStates>{
    constructor(props: any) {
        super(props)
        this.state = {
            newSkill: new Skill(0, '', [new Category(0,'')]),
            newCategory: new Category(0,'')

            
        }
    }

}
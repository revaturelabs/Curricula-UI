import React from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, Input } from '@material-ui/core';


interface ICreateCurriculumPageProps{
    postSubmitCurriculum: (newCurriculum: Curriculum) => void
    getAllSkills: () => void
    allSkillsMap: Skill[]
}

export class CreateCurriculumPageComponent extends React.Component<ICreateCurriculumPageProps,any>{
    constructor(props:any){
        super(props)
        this.state = {
            //newCurriculum: new Curriculum(0, '', this.state.skillsToCurriculumArray),
            skillsToCurriculumArray: [new Skill(0,'',new Category(0,''))],
            newCurriculumName: '',
            allSkillsMap: [new Skill(0,'',new Category(0,''))]
        }
    }

    upCurriculumName = (e: any) => {
        this.setState({
            ...this.state,
            newCurriculumName: e.target.value
        })
    }

    upSkillsToCurriculumArray = (e: any) => {
        let skillToAdd = this.props.allSkillsMap[e - 1]
        let currArray = this.state.skillsToCurriculumArray
        if (currArray.length === 1){
            currArray.push(skillToAdd)
        } else if (currArray.length > 1){
            for (let i = 0; i < currArray.length; i++){
                if ((currArray[i].skillId === skillToAdd.skillId)){
                    alert('That skill already exists, Mate!')
                    break
               } else if ((i === currArray.length - 1)){
                    currArray.push(skillToAdd)
                    break
                } 
           }
        }
        this.setState({
            ...this.state,
        })
    }
    

    componentDidMount(){
        this.setState({
            ...this.state
        })
    }

    render() {
        
        return(
            <>
                <div>
                    <Input className="newCurriculumForm" placeholder="New Curriculum Name" onChange={this.upCurriculumName}/>
                    <Button className="newCurriculumForm">Create Curriculum {this.state.newCurriculumName}</Button>
                </div>
                
                <ul className="skillToCurriculumList">
                    {this.state.skillsToCurriculumArray.map((e:any) => {
                        return (<li>{e.skillName}</li>)
                    })}
                    
                </ul>
                <div>
                    {this.props.allSkillsMap.map((e:any) => {
                        return (
                            <Button value={e.skillId} className="skillPillCurriculum" onClick={()=>{this.upSkillsToCurriculumArray(e.skillId)}}>{e.skillName}</Button>
                        )
                    })}
                    
                </div>

                <PopupButtonComponent/>
            </>
        )
    }
}
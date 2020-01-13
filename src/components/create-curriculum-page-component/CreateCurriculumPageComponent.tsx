import React from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button } from '@material-ui/core';


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
            allSkillsMap: [new Skill(0,'',new Category(0,''))]
        }
    }

    upSkillsToCurriculumArray = (e: any) => {
        this.state.skillsToCurriculumArray.push(this.props.allSkillsMap[e - 1])
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
                
                <ul className="skillToCurriculumList">
                    {this.state.skillsToCurriculumArray.map((e:any) => {
                        return (<li>{e.skillName}</li>)
                    })}
                    
                </ul>
                <div>
                    {/* <p>{this.props.allSkillsMap(skillId(4)}</p> */}
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
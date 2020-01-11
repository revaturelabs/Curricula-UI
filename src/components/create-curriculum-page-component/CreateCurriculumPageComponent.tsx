import React, { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, ButtonGroup } from '@material-ui/core';
import { store } from '../../Store';


interface ICreateCurriculumPageProps{
    postSubmitCurriculum: (newCurriculum: Curriculum) => void
    getAllSkills: () => void
    allSkillsMap: Skill[]
}

export class CreateCurriculumPageComponent extends React.Component<ICreateCurriculumPageProps,any>{
    constructor(props:any){
        super(props)
        this.state = {
           // newCurriculum: new Curriculum(0, '', this.state.skillsToCurriculumArray),
           
            skillsToCurriculumArray: [new Skill(0,'',new Category(0,''))],
            allSkillsMap: [new Skill(0,'',new Category(0,''))]
        }
    }

    upSkillsToCurriculumArray = (e: SyntheticEvent) => {
        this.setState({
            ...this.state,
          //  skillsToCurriculumArray: this.state.skillsToCurriculumArray += e.target.value
        })
    }
    

    componentWillMount(){
        const { getAllSkills } = this.props;
        getAllSkills();
        this.setState({
            ...this.state,
            allSkillsMap: store.getState().allSkills.skillSet
        })
    }

    render() {
        
        return(
            <>
                <ButtonGroup>
                    {this.state.allSkillsMap.map((e:Skill) => {
                        return (<div>
                            <Button value={e.id} className="skillPill" onClick={this.upSkillsToCurriculumArray}>
                                {e.name}</Button></div>
                        )
                    })}
                </ButtonGroup>

                <PopupButtonComponent/>
            </>
        )
    }
}
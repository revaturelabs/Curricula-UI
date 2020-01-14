import React, { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, Input, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom'


interface ICreateCurriculumPageProps {
    postSubmitCurriculum: (newCurriculum: Curriculum) => void
    getAllSkills: () => void
    allSkillsMap: Skill[]
    skill: string
    curriculaIdNum: Curriculum[]
}

export class CreateCurriculumPageComponent extends React.Component<ICreateCurriculumPageProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            skillsToCurriculumArray: [new Skill(0, '', new Category(0, ''))],
            newCurriculumName: '',
            newCurriculum: new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))]),
            filterSkillsMap: [new Skill(0, '', new Category(0, ''))],
            filterSkillsORSkillsMap: Boolean
        }
    }

    upCurriculumName = (e: any) => {
        let existingCurricula = this.props.curriculaIdNum
        for (let i = 0; i < existingCurricula.length; i++) {
            if (existingCurricula[i].curriculumName === e.target.value) {
                return alert('A Currriculum of this name already exists. Please get more creative...')
            } else if (i === existingCurricula.length - 1) {
                this.setState({
                    ...this.state,
                    newCurriculumName: e.target.value
                })
            }
        }
    }

    upSkillsToCurriculumArray = (e: any) => {
        let skillToAdd = this.props.allSkillsMap[e - 1]
        let currArray = this.state.skillsToCurriculumArray
        if (currArray.length === 1) {
            currArray.push(skillToAdd)
        } else if (currArray.length > 1) {
            for (let i = 0; i < currArray.length; i++) {
                if ((currArray[i].skillId === skillToAdd.skillId)) {
                    alert('Already got that skill, Mate!')
                    break
                } else if ((i === currArray.length - 1)) {
                    currArray.push(skillToAdd)
                    break
                }
            }
        }
        this.setState({
            ...this.state,
        })
        console.log(this.state.skillsToCurriculumArray);
        
    }

    submitCurriculum = (e: SyntheticEvent) => {
        e.preventDefault()
        if (this.state.newCurriculumName.length <= 2) {
            alert('Please enter a valid Curriculum Name, at least two characters long')
        } else if (this.state.skillsToCurriculumArray.length < 1) {
            alert('Please make sure to include at least one skill in your New curriculum')
        } else {
            console.log(this.state.newCurriculum)
            this.state.skillsToCurriculumArray.shift()
            this.state.newCurriculum.curriculumId = this.props.curriculaIdNum.length + 1
            this.state.newCurriculum.curriculumName = this.state.newCurriculumName
            this.state.newCurriculum.skills = this.state.skillsToCurriculumArray
            this.setState({
                ...this.state,
            })
            this.props.postSubmitCurriculum(this.state.newCurriculum)
            //message of successful creation should go here once sql error is handled
        }
    }

    filterSkills = (e : any) => {
        let searchInputValue = e.target.value
        let tempSkillsMap = [new Skill(0, '', new Category(0, ''))]
        for (let i = 0; i < this.props.allSkillsMap.length; i++) {
            let searchString = this.props.allSkillsMap[i].skillName 
            if (searchString.toLowerCase().includes(searchInputValue)){
                tempSkillsMap.push(this.props.allSkillsMap[i])
            }
        }
        this.setState({
            ...this.state,
            filterSkillsMap: tempSkillsMap
        })        
    }

    render() {
        return (
            <>
                <div>
                    <Input className="newCurriculumForm" placeholder="New Curriculum Name" onChange={this.upCurriculumName} />
                    <Link to="/"><Button className="newCurriculumForm" onClick={this.submitCurriculum}>Create Curriculum {this.state.newCurriculumName}</Button></Link>
                </div>

                <div>
            <br />
            <Grid container justify="center">
                <Paper component="form" >
                    <Input placeholder="Type to filter..." onChange={this.filterSkills}></Input>
                </Paper>
            </Grid>
        </div>

                <ul className="skillToCurriculumList">
                    {this.state.skillsToCurriculumArray.map((e: any) => {
                        return (<li key = {e.skillId}>{e.skillName}</li>)
                    })}

                </ul>
                {this.state.filterSkillsMap.length === 1 ?
                <div>
                    {this.props.allSkillsMap.map((f: any) => {
                        return (
                            <Button value={f.skillId} className="skillPillCurriculum" key = {f.skillId} onClick={() => { this.upSkillsToCurriculumArray(f.skillId) }}>{f.skillName}</Button>
                        )
                    })}
                </div> :
                <div>
                    {this.state.filterSkillsMap.map((e: any) => {
                        return (
                            <Button value={e.skillId} className="skillPillCurriculum" key = {e.skillId} onClick={() => { this.upSkillsToCurriculumArray(e.skillId) }}>{e.skillName}</Button>
                        )
                    })}   
                </div>
                }

                <PopupButtonComponent />
            </>
        )
    }
}
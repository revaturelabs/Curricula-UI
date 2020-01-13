import React, { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, Input, Grid, Paper, TextField } from '@material-ui/core';
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
    }

    submitCurriculum = (e: SyntheticEvent) => {
        e.preventDefault()
        if (this.state.newCurriculumName.length < 2) {
            alert('Please enter a valid Curriculum Name, greater than two characters')
        } else if (this.state.skillsToCurriculumArray.length < 6) {
            alert('Please make sure to include at least five skills in your New curriculum')
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
            console.log(this.state.newCurriculum)
            //message of successful creation should go here once sql error is handled
        }
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

                    <TextField
                        placeholder="Type to filter..."
                        id="checkboxes-tags-demo"
                        style={{ width: 500 }}
                    />
                </Paper>
            </Grid>
        </div>

                <ul className="skillToCurriculumList">
                    {this.state.skillsToCurriculumArray.map((e: any) => {
                        return (<li>{e.skillName}</li>)
                    })}

                </ul>
                <div>
                    {this.props.allSkillsMap.map((e: any) => {
                        return (
                            <Button value={e.skillId} className="skillPillCurriculum" onClick={() => { this.upSkillsToCurriculumArray(e.skillId) }}>{e.skillName}</Button>
                        )
                    })}

                </div>

                <PopupButtonComponent />
            </>
        )
    }
}
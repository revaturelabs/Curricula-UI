import React, { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, Input, Grid, Paper } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { Link, Redirect } from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import '../../App.css'

interface ICreateCurriculumPageProps {
    postSubmitCurriculum: (newCurriculum: Curriculum) => void
    getAllSkills: () => void
    allSkillsMap: Skill[]
    skill: string
    curriculaIdNum: Curriculum[]
    allCategories: Category[]
}

export class CreateCurriculumPageComponent extends React.Component<ICreateCurriculumPageProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            skillsToCurriculumArray: [new Skill(0, '', new Category(0, ''))],
            allCurricula: this.props.curriculaIdNum,
            newCurriculumName: '',
            filterSkillsMap: [new Skill(0, '', new Category(0, ''))],
            search: false,
            colors: ['white', 'red', 'orangered', 'orange', 'gold', 'yellow', 'yellowgreen', 'green', 'teal', 'blue', 'blueviolet', 'indigo', 'darkviolet', 'violet'],
            submitSuccess: false
        }
    }

    componentDidUpdate() {
        if(this.state.allCurricula.length < this.props.curriculaIdNum.length && !this.state.submitSuccess) {
            this.setState({
                ...this.state,
                submitSuccess: true
            })
        }
    }

    upCurriculumName = (e: any) => {
        this.setState({
            ...this.state,
            newCurriculumName: e.target.value
        })
    }

    upSkillsToCurriculumArray = (e: Skill) => {
        let currArray = this.state.skillsToCurriculumArray
        let added
        if (currArray.length <= 1) {
            currArray.push(e)
        } else {
            for (let i = 0; i < currArray.length; i++) {
                if ((currArray[i] === e)) {
                    currArray.splice(i, 1)
                    added = false
                    break
                }
            } if (added !== false) {
                currArray.push(e)
            }
        }
        this.setState({
            ...this.state,
            upSkillsToCurriculumArray: currArray
        })
    }

    submitCurriculum = (e: SyntheticEvent) => {
        e.preventDefault()
        let existingCurricula = this.props.curriculaIdNum
        for (let i = 0; i < existingCurricula.length; i++) {
            if (existingCurricula[i].curriculumName === this.state.newCurriculumName) {
                return alert('A Currriculum of this name already exists. Please get more creative...')
            }
        }
        if (this.state.newCurriculumName.length <= 2) {
            alert('Please enter a valid Curriculum Name, at least two characters long')
        } else if (this.state.skillsToCurriculumArray.length < 1) {
            alert('Please make sure to include at least one skill in your New curriculum')
        } else {
            this.state.skillsToCurriculumArray.shift()
            let submitCurriculum = new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])
            submitCurriculum.curriculumId = this.props.curriculaIdNum.length + 1
            submitCurriculum.curriculumName = this.state.newCurriculumName
            submitCurriculum.skills = this.state.skillsToCurriculumArray
            this.props.postSubmitCurriculum(submitCurriculum)
        }
    }

    filterSkills = (e: any) => {
        let searchInputValue = e.target.value
        let search
        if (e.target.value) {
            search = true
        } else {
            search = false
        }
        let tempSkillsMap = [new Skill(0, '', new Category(0, ''))]
        for (let i = 0; i < this.props.allSkillsMap.length; i++) {
            let searchString = this.props.allSkillsMap[i].skillName
            if (searchString.toLowerCase().includes(searchInputValue)) {
                if (tempSkillsMap[0].skillId === 0) {
                    tempSkillsMap[0] = this.props.allSkillsMap[i]
                } else {
                    tempSkillsMap.push(this.props.allSkillsMap[i])
                }
            }
        }
        this.setState({
            ...this.state,
            filterSkillsMap: tempSkillsMap,
            search
        })
    }

    compare(a: any, b: any) {
        if (a.category.categoryId > b.category.categoryId) {
            return 1;
        }
        if (a.category.categoryId < b.category.categoryId) {
            return -1;
        }
        return 0;
    }

    render() {
        return (
            !this.state.submitSuccess ?
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

                {this.state.filterSkillsMap[0].skillId === 0 && !this.state.search ?
                    <div className="skillPillContainer" >
                        {this.props.allSkillsMap.sort(this.compare).map((f: any) => {
                            return (
                                this.state.skillsToCurriculumArray.includes(f) ?
                                    <Chip icon={<DoneIcon />} label={f.skillName} className="skillPillCurriculum" key={f.skillId} style={{ backgroundColor: this.state.colors[f.category.categoryId] }} onClick={() => { this.upSkillsToCurriculumArray(f) }} /> :
                                    <Chip label={f.skillName} className="skillPillCurriculum" key={f.skillId} style={{ backgroundColor: this.state.colors[f.category.categoryId], opacity: 0.6 }} onClick={() => { this.upSkillsToCurriculumArray(f) }} />
                            )
                        })}
                    </div> :
                    <div className="skillPillContainer" >
                        {this.state.filterSkillsMap.sort(this.compare).map((e: any) => {
                            return (
                                this.state.skillsToCurriculumArray.includes(e) ?
                                    <Chip icon={<DoneIcon />} label={e.skillName} className="skillPillCurriculum" key={e.skillId} style={{ backgroundColor: this.state.colors[e.category.categoryId] }} onClick={() => { this.upSkillsToCurriculumArray(e) }} /> :
                                    <Chip label={e.skillName} className="skillPillCurriculum" key={e.skillId} style={{ backgroundColor: this.state.colors[e.category.categoryId], opacity: 0.6 }} onClick={() => { this.upSkillsToCurriculumArray(e) }} />
                            )
                        })}
                    </div>
                }

                <PopupButtonComponent categories={this.props.allCategories}/>
            </> :
            <Redirect to='/search' />
        )
    }
}
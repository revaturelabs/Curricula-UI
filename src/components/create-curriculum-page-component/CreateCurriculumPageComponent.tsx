import React, { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, Input, Grid, Paper } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Alert from '@material-ui/lab/Alert';
import '../../App.css'
import { Redirect } from 'react-router';

interface ICreateCurriculumPageProps {
    postSubmitCurriculum: (newCurriculum: Curriculum) => void
    getAllSkills: () => void
    allSkills: Skill[]
    allCurricula: Curriculum[]
    allCategories: Category[]
}

interface ICreateCurriculumPageState {
    skillsToCurriculumArray: Skill[]
    allCurriculaState: Curriculum[]
    newCurriculumName: string
    filterSkillsMap: Skill[]
    search: string
    colors: string[]
    shortName: boolean
    noSkills: boolean
    existsAlready: boolean
    submitSuccess: boolean
}

export class CreateCurriculumPageComponent extends React.Component<ICreateCurriculumPageProps, ICreateCurriculumPageState>{
    constructor(props: any) {
        super(props)
        this.state = {
            skillsToCurriculumArray: [new Skill(0, '', new Category(0, ''))],
            allCurriculaState: this.props.allCurricula,
            newCurriculumName: '',
            filterSkillsMap: [new Skill(0, '', new Category(0, ''))],
            search: '',
            colors: ['white', 'red', 'orangered', 'orange', 'gold', 'yellow', 'yellowgreen', 'green', 'teal', 'blue', 'blueviolet', 'indigo', 'darkviolet', 'violet'],
            shortName: false,
            noSkills: false,
            existsAlready: false,
            submitSuccess: false
        }
    }

    componentDidUpdate() {
        if (this.state.allCurriculaState.length < this.props.allCurricula.length && !this.state.submitSuccess) {
            this.setState({
                ...this.state,
                submitSuccess: true
            })
        }
    }

    updateCurriculumName = (e: any) => {
        this.setState({
            ...this.state,
            newCurriculumName: e.target.value
        })
    }

    updateSkillsToCurriculumArray = (skill: Skill) => {
        let skillsArray = [...this.state.skillsToCurriculumArray]

        if (!skillsArray.includes(skill)) {
            skillsArray.push(skill)
        } else {
            let index = skillsArray.findIndex((skillToCheck: Skill) => { return skillToCheck === skill })
            skillsArray.splice(index, 1)
        }

        this.setState({
            ...this.state,
            skillsToCurriculumArray: skillsArray
        })
    }

    submitCurriculum = (e: SyntheticEvent) => {
        e.preventDefault()
        if (this.state.newCurriculumName.length <= 2) {
            this.setState({
                ...this.state,
                shortName: true,
                noSkills: false,
                existsAlready: false
            })
        } else if (this.state.skillsToCurriculumArray.length < 1) {
            this.setState({
                ...this.state,
                shortName: false,
                noSkills: true,
                existsAlready: false
            })
        } else {
            for (let curriculum of this.props.allCurricula) {
                if (curriculum.curriculumName === this.state.newCurriculumName) {
                    this.setState({
                        ...this.state,
                        shortName: false,
                        noSkills: false,
                        existsAlready: true
                    })
                    return
                }
            }
            this.state.skillsToCurriculumArray.shift()
            let newCurriculum = new Curriculum(0, this.state.newCurriculumName, this.state.skillsToCurriculumArray)
            this.props.postSubmitCurriculum(newCurriculum)
            this.setState({
                ...this.state,
                shortName: false,
                noSkills: false,
                existsAlready: false
            })
        }
    }

    updateSearch = (e: any) => {
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }

    compare(skill1: Skill, skill2: Skill) {
        if (skill1.category.categoryId > skill2.category.categoryId) {
            return 1;
        }
        if (skill1.category.categoryId < skill2.category.categoryId) {
            return -1;
        }
        return 0;
    }

    render() {

        let allSkills = [...this.props.allSkills]
        allSkills.sort(this.compare)
        let skillsToDisplay = allSkills.filter((skill: Skill) => {
            if (skill.skillName.toLowerCase().includes(this.state.search.toLowerCase())) {
                return true
            } else {
                return false
            }
        }).map((skill: Skill) => {
            if (this.state.skillsToCurriculumArray.includes(skill)) {
                return <Chip icon={<DoneIcon />} label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[skill.category.categoryId] }} onClick={() => { this.updateSkillsToCurriculumArray(skill) }} />
            } else {
                return <Chip label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[skill.category.categoryId], opacity: 0.6 }} onClick={() => { this.updateSkillsToCurriculumArray(skill) }} />
            }
        })

        return (
            !this.state.submitSuccess ?
            <>
                <div>
                    <Input className="newCurriculumForm" placeholder="New Curriculum Name" onChange={this.updateCurriculumName} />
                    <Button className="newCurriculumForm" onClick={this.submitCurriculum}>Create Curriculum {this.state.newCurriculumName}</Button>
                </div>

                <div>
                    <br />
                    <Grid container justify="center">
                        <Paper component="form" >
                            <Input placeholder="Type to filter..." value={this.state.search} onChange={this.updateSearch}></Input>
                        </Paper>
                    </Grid>
                </div>

                <div className="skillPillContainer">
                    {skillsToDisplay}
                </div>

                <PopupButtonComponent categories={this.props.allCategories} />

                {this.state.shortName && (<Alert severity="error">Please include a longer name for your curriculum.</Alert>)}
                {this.state.noSkills && (<Alert severity="error">Please include skills in your curriculum.</Alert>)}
                {this.state.existsAlready && (<Alert severity="error">A curriculum by this name already exists.</Alert>)}
                {this.state.submitSuccess && (<Alert severity="success">Curriculum Created Successfully</Alert>)}
            </> :
            <Redirect to='/search' />
        )
    }
}
import React, { SyntheticEvent } from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import { Button, Grid, TextField } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Alert from '@material-ui/lab/Alert';
import '../../App.css'
import COLORS from '../../colors';
import '../create-curriculum-component/CreateCurriculum.css'
import NavBarComponent from '../navbar-component/NavBarComponent'
import { Redirect } from 'react-router';

interface ICreateCurriculumProps {
    postSubmitCurriculum: (newCurriculum: Curriculum) => any
    getAllSkills: () => void
    allSkills: Skill[]
    allCurricula: Curriculum[]
    allCategories: Category[]
}

interface ICreateCurriculumState {
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
    submitFailed: boolean
}

export class CreateCurriculumComponent extends React.Component<ICreateCurriculumProps, ICreateCurriculumState>{
    constructor(props: any) {
        super(props)
        this.state = {
            skillsToCurriculumArray: [new Skill(0, '', new Category(0, ''))],
            allCurriculaState: this.props.allCurricula,
            newCurriculumName: '',
            filterSkillsMap: [new Skill(0, '', new Category(0, ''))],
            search: '',
            colors: COLORS,
            shortName: false,
            noSkills: false,
            existsAlready: false,
            submitSuccess: false,
            submitFailed: false
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

    updateCurriculumName = (curriculumNameInput: any) => {
        this.setState({
            ...this.state,
            newCurriculumName: curriculumNameInput.target.value
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

    submitCurriculum = async (submitCurriculumBtn: SyntheticEvent) => {
        submitCurriculumBtn.preventDefault()
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
            try {
                const response = await this.props.postSubmitCurriculum(newCurriculum)
                if (response.status === 200) {
                    this.setState({
                        ...this.state,
                        shortName: false,
                        noSkills: false,
                        existsAlready: false
                    })
                }
            } catch (error) {
                this.setState({
                    ...this.state,
                    shortName: false,
                    noSkills: false,
                    existsAlready: false,
                    submitFailed: true
                })
            }
        }
    }

    updateSearch = (searchCurriculum: any) => {
        this.setState({
            ...this.state,
            search: searchCurriculum.target.value
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
                return <Chip icon={<DoneIcon style={{ color: "white" }} />} label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[skill.category.categoryId] }} onClick={() => { this.updateSkillsToCurriculumArray(skill) }} />
            } else {
                return <Chip label={skill.skillName} className="skillPillCurriculum" key={skill.skillId} style={{ backgroundColor: this.state.colors[skill.category.categoryId], opacity: 0.5 }} onClick={() => { this.updateSkillsToCurriculumArray(skill) }} />
            }
        })
        return (
            !this.state.submitSuccess ?
                <>
                    <NavBarComponent />
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item>
                            <TextField
                                style={{ width: 500 }}
                                variant="outlined" id="curriculumNameInput" className="newCurriculumForm" label="Curriculum Name" onChange={this.updateCurriculumName} />
                        </Grid>
                    </Grid>

                    <div>
                        <br />
                        <Grid container justify="center">
                            <Grid item>
                                <TextField
                                    style={{ width: 500 }}
                                    variant="outlined" label="Search Skills" placeholder="Skill" value={this.state.search} onChange={this.updateSearch} />
                            </Grid>
                        </Grid>
                    </div>

                    <div className="skillPillContainer">
                        {skillsToDisplay}
                    </div>

                    <Button id="createCurriculumButton" variant="contained" color="primary" className="newCurriculumForm" style={{ marginTop: '1em', marginBottom: '1em' }} onClick={this.submitCurriculum}>Create Curriculum</Button>
                    <PopupButtonComponent />
                    <br />
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        {this.state.shortName && (<Alert severity="error">Please include a longer name for your curriculum.</Alert>)}
                        {this.state.noSkills && (<Alert severity="error">Please include skills in your curriculum.</Alert>)}
                        {this.state.existsAlready && (<Alert severity="error">A curriculum by this name already exists.</Alert>)}
                        {this.state.submitFailed && (<Alert severity="error">An unkown error has occured, try again later</Alert>)}
                        {this.state.submitSuccess && (<Alert severity="success">Curriculum Created Successfully</Alert>)}
                    </Grid>
                </> :
                <Redirect to='/vis/search' />
        )
    }
}
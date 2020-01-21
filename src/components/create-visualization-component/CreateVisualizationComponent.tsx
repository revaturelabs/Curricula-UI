import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid, Button, Container, Chip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Visualization } from '../../models/visualization';
import { Curriculum } from '../../models/curriculum';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import NavBarComponent from '../navbar-component/NavBarComponent'
import Alert from '@material-ui/lab/Alert';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ICurriculum {
    curriculum: string;
}

interface ISearchCurriculumProps {
    postSubmitVisualization: (newVisualization: Visualization) => void
    allCurricula: Curriculum[]
    allVisualizations: Visualization[]
}

export function SearchCurriculumComponent(props: ISearchCurriculumProps) {

    const [visualizationName, setVisualizationName] = React.useState('');
    const [shortName, setShortName] = React.useState(false);
    const [noCurricula, setNoCurricula] = React.useState(false);
    const [existsAlready, setExistsAlready] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    const [newCurricula, setNewCurricula] = React.useState([new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])]);

    const curriculumList = props.allCurricula.map((e: any) => {
        return { curriculum: e.curriculumName }
    })

    const updateCurricula = (name: string, selected: boolean) => {
        let currName: Curriculum = new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])
        for (let i = 0; i < props.allCurricula.length; i++) {
            if (props.allCurricula[i].curriculumName === name) {
                currName = props.allCurricula[i]
                break
            }
            else if (i === props.allCurricula.length - 1) {
                return console.log('Curriculum does not match match')
            } else {
                continue
            }
        }
        if (newCurricula.length > 0) {
            if (newCurricula[0].curriculumId === 0) {
                newCurricula.pop()
            }
        }
        if (selected) {
            newCurricula.push(currName)
            setNewCurricula(newCurricula)
        } else if (newCurricula.includes(currName)) {
            const index = newCurricula.indexOf(currName)
            newCurricula.splice(index, 1);
            setNewCurricula(newCurricula)
        }
        console.log(newCurricula);
    }

    const updateVisualization = (e: any) => {
        setVisualizationName(e.target.value)
    }

    const sumbitVisualization = (e: any) => {
        e.preventDefault()
        console.log(newCurricula);
        if (visualizationName.length <= 2) {
            setShortName(true)
            setNoCurricula(false)
            setExistsAlready(false)
            setSubmitSuccess(false)
            setNewCurricula([new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])
        } else if (newCurricula.length < 1) {
            setShortName(false)
            setNoCurricula(true)
            setExistsAlready(false)
            setSubmitSuccess(false)
            setNewCurricula([new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])
        } else {
            let noError = true
            for (let visualization of props.allVisualizations) {
                if (visualization.visualizationName === visualizationName) {
                    setShortName(false)
                    setNoCurricula(false)
                    setExistsAlready(true)
                    setSubmitSuccess(false)
                    noError = false
                    setNewCurricula([new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])
                }
            }
            if (noError) {
                let tempVisualization = new Visualization(0, '', [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])
                tempVisualization.visualizationName = visualizationName
                tempVisualization.curricula = newCurricula
                props.postSubmitVisualization(tempVisualization)
                setShortName(false)
                setNoCurricula(false)
                setExistsAlready(false)
                setSubmitSuccess(true)
            }
        }
    }

    return (
        <div>
            <NavBarComponent />
            <br />
            <TextField onChange={updateVisualization} value={visualizationName} id="VisualizationName" label="Visualization Name" variant="outlined" />
            <Grid container justify="center" >
                <Autocomplete
                    popupIcon={<SearchIcon />}
                    placeholder="test"
                    multiple
                    id="checkboxes-tags-demo"
                    options={curriculumList}
                    disableCloseOnSelect
                    getOptionLabel={(option: ICurriculum) => option.curriculum}
                    renderTags={(value: ICurriculum[]) =>
                        value.map((option: ICurriculum) => (
                            <Chip label={option.curriculum} key={option.curriculum} />
                        ))
                    }
                    renderOption={(option: ICurriculum, { selected }) => (
                        <Container onClick={() => {
                            updateCurricula(option.curriculum, !selected)
                        }}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.curriculum}
                        </Container>
                    )}
                    style={{ width: 500 }}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Search Curriculum"
                            placeholder="Curriculum"
                            fullWidth
                        />
                    )}
                />
            </Grid>
            <br />
            <Button onClick={sumbitVisualization} variant="contained" color="primary">
                Make
            </Button>
            {shortName && (<Alert severity="error">Please include a longer name for your visualization.</Alert>)}
            {noCurricula && (<Alert severity="error">Please include a curriculum in your visualization.</Alert>)}
            {existsAlready && (<Alert severity="error">A visualization by this name already exists.</Alert>)}
            {submitSuccess && (<Alert severity="success">Visualization Created Successfully</Alert>)}
        </div>
    );
}



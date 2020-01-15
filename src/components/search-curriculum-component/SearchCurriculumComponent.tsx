import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Visualization } from '../../models/visualization';
import { Curriculum } from '../../models/curriculum';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ITestData {
    curriculum: string;
}

interface ISearchCurriculumProps {
    postSubmitVisualization: (newVisualization: Visualization) => void
    allCurricula: Curriculum[]
    //newCurricula: Curriculum[]
}

export function SearchCurriculumComponent(props: ISearchCurriculumProps) {

    const [visualizationName, setVisualizationName] = React.useState('');
    const [newCurricula, setNewCurricula] = React.useState([new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])]);
    newCurricula.pop()
    const curriculumList = props.allCurricula.map((e: any) => {
        return { curriculum: e.curriculumName }
    })

    const updateCurricula = (name: string, selected: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (selected) {
            newCurricula.push(props.allCurricula[0])
        }
        setNewCurricula(newCurricula)
        console.log(name);
        console.log(newCurricula);
    }

    const updateVisualization = (e: any) => {
        setVisualizationName(e.target.value)
    }
    const testing = () => {
        console.log('this was clicked');

    }

    const sumbitVisualization = (e: any) => {
        e.preventDefault()
        let tempVisualization = new Visualization(0, '', [new Curriculum(0, '', [new Skill(0, '', new Category(0, ''))])])
        tempVisualization.visualizationName = visualizationName
        tempVisualization.curricula = newCurricula
        console.log(newCurricula);

        console.log(tempVisualization);

        props.postSubmitVisualization(tempVisualization)
    }

    return (
        <div>
            <br />
            <TextField onChange={updateVisualization} value={visualizationName} id="VisualizationName" label="Visualization Name" variant="outlined" />
            <br />
            <Grid container justify="center" >
                <Autocomplete
                    popupIcon={<SearchIcon />}
                    placeholder="test"
                    multiple
                    id="checkboxes-tags-demo"
                    options={curriculumList}
                    disableCloseOnSelect
                    getOptionLabel={(option: ITestData) => option.curriculum}
                    renderOption={(option: ITestData, { selected }) => (
                        <React.Fragment>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                                onChange={updateCurricula(option.curriculum, !selected)}
                                onClick={testing}
                            />
                            {option.curriculum}
                        </React.Fragment>
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
            <Button onClick={sumbitVisualization} variant="contained" color="primary">
                Make
            </Button>
        </div>
    );
}




import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Visualization } from '../../models/visualization';
import { Curriculum } from '../../models/curriculum';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ITestData {
    curriculum: string;
}

interface ISearchCurriculumProps {
    postSubmitVisualization: (newVisualization: Visualization) => void
    allCurricula: Curriculum[]
}

export function SearchCurriculumComponent(ISearchCurriculumProps: any) {

    const curriculumList = ISearchCurriculumProps.allCurricula.map((e: any) => {
        console.log(e.curriculumName);

        return { curriculum: e.curriculumName }
    })

    return (
        <div>
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
        </div>
    );
}




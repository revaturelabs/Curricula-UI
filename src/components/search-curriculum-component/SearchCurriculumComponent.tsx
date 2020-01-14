import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStore, useSelector } from 'react-redux';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ITestData {
    curriculum: string;
}

export function SearchCurriculumComponent(props: any) {

    const [curriculum, setCurriculum] = React.useState(props.allCurricula)

    console.log(props.allCurricula[0]);

    // const curriculumList = [
    //     { curriculum: curriculum[0].curriculumName },
    // ];

    const curriculumList = props.allCurricula.map((e: any) => {
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




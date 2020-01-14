import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ITestData {
    curriculum: string;
}

export function SearchCurriculumComponent(props: any) {

    const curriculumList = props.allCurricula.map((e: any) => {
        return { curriculum: e.curriculumName }
    })

    const temp = (e: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <br />
            <TextField id="VisualizationName" label="Visualization Name" variant="outlined" />
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
                                onChange={temp}
                                value={'test'}
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
            <Button variant="contained" color="primary">
                Make
            </Button>
        </div>
    );
}




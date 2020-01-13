import React from 'react'
import { Grid, Paper, Checkbox, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface IData {
    skill: string;
}

export function CreateCurriculumComponent() {

    return (
        <div>
            <br />
            <Grid container justify="center">
                <Paper component="form" >

                    <Autocomplete
                        popupIcon={<SearchIcon />}
                        placeholder="test"
                        multiple
                        id="checkboxes-tags-demo"
                        options={skillList}
                        disableCloseOnSelect
                        //getOptionLabel={(option: IData) => option.skill}
                        // renderOption={(option: IData, { selected }) => (
                        //     <React.Fragment>
                        //         <Checkbox
                        //             icon={icon}
                        //             checkedIcon={checkedIcon}
                        //             style={{ marginRight: 8 }}
                        //             checked={selected}
                        //         />
                        //         {option.skill}
                        //     </React.Fragment>
                        // )}
                        style={{ width: 500 }}
                        renderInput={params => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Search Skill"
                                placeholder="Skill"
                                fullWidth
                            />
                        )}
                    />
                </Paper>
            </Grid>
        </div>
    )
}

    const skillList = [
        { skill: 'Angular' },
        { skill: 'React' },
        { skill: 'Jenkin' },
        { skill: 'SQL' }
    ];


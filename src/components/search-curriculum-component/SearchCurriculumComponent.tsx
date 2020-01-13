import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Grid, Paper, makeStyles, Theme, createStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ITestData {
    curriculum: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

export function SearchCurriculumComponent(props: any) {

    const classes = useStyles();

    const [curriculum, setCurriculum] = React.useState(props)

    console.log("this is the props " + curriculum);


    const curriculumList = [
        { curriculum: 'Java React' },
        { curriculum: 'Cyber Security' },
        { curriculum: 'Java Angular' },
        { curriculum: 'Java' },
        { curriculum: 'Java React Extended' },
        { curriculum: 'Java Angular Extended' },
        { curriculum: 'Microservices' },
        { curriculum: 'Salesforce' },
        { curriculum: 'Java Testing' },
        { curriculum: 'Business Analysis' },
        { curriculum: 'GCP' },
    ];

    return (
        <div>
            <br />
            <Grid container justify="center" >
                <Paper component="form" className={classes.root}>

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
                </Paper>
            </Grid>
        </div>
    );
}




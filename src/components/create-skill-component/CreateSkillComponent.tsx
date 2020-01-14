import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Theme, createStyles, MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);


export default function CreateSkillComponent() {

    const [skill, setSkill] = React.useState('');
    const [category, setCategory] = React.useState('');

    const classes = useStyles();
    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string);
    };

    const updateSkill = (e: any) => {
        setSkill(e.target.value)
        console.log(skill);
    }

    const submitSkill = async (e: any) => {
        e.preventDefault( )
    }


    return (
        <div>
            <h2>Create New Skill</h2>
            <h5> Select Your Category :</h5>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Category
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="framework">Framework</MenuItem>
                    <MenuItem value="devops">DevOps</MenuItem>
                    <MenuItem value="architecture">Architecture</MenuItem>
                    <MenuItem value="database">Database</MenuItem>
                    <MenuItem value="sourcecode">Sourcecode</MenuItem>
                    <MenuItem value="ide">IDE</MenuItem>
                    <MenuItem value="language">Language</MenuItem>
                    <MenuItem value="server">Server</MenuItem>
                    <MenuItem value="library">Library</MenuItem>
                    <MenuItem value="testing">Testing</MenuItem>
                    <MenuItem value="microservices">Microservices</MenuItem>
                </Select>
            </FormControl>

            <br /><br />

            <h5>Type Your Skill Name :</h5>
            <form noValidate autoComplete="off">
                <TextField onChange={updateSkill} id="outlined-basic" label="SkillName" variant="outlined" />
                <br /><br />
                <Button onClick={submitSkill} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}


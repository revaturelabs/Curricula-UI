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


export default function CreateSkillComponent(categories: any) {

    console.log(categories);
    const fillDropdown = categories.categories.categories.map((e:any) => {
        return <MenuItem value={e.categoryName} key={"key" + e.categoryId}>{e.categoryName}</MenuItem>
    })

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
            <h3>Create New Skill</h3>
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
                    {fillDropdown}
                </Select>
            </FormControl>

            <h5>Type Your Skill Name :</h5>
            <form>
                <TextField onChange={updateSkill} id="outlined-basic" label="SkillName" variant="outlined" size="small"/>
                <br /><br />
                <Button onClick={submitSkill} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}


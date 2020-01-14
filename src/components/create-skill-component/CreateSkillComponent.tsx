import React, { SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Theme, createStyles, MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';



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

    const [skillName, setSkillName] = React.useState('');
    const [categoryName, setCategoryName] = React.useState('');
    //const [skillToSubmit, setSkillToSubmit] = React.useState('');

    const classes = useStyles();
    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setCategoryName(event.target.value.categoryName);
    // };

    const updateCategoryName = (e: any) => {
        setCategoryName(e.target.value)
        console.log(categoryName)
    }

    const updateSkillName = (e: any) => {
        setSkillName(e.target.value)
        console.log(skillName);
    }

    const submitSkill = async (e: SyntheticEvent) => {
        e.preventDefault( )
        let skillToSubmit: Skill  = {
            skillName: skillName,
            skillId: 0,
            category: {
                categoryId: 0,
                categoryName: categoryName
            }
        }
        console.log(skillToSubmit)
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
                    value={categoryName}
                    // onChange={handleChange}
                    labelWidth={labelWidth}
                    onClick={updateCategoryName}
                >
                    <MenuItem >
                        <em>None</em>
                    </MenuItem>
                    {fillDropdown}
                </Select>
            </FormControl>

            <h5>Type Your Skill Name :</h5>
            <form>
                <TextField onChange={updateSkillName} id="outlined-basic" label="SkillName" variant="outlined" size="small"/>
                <br /><br />
                <Button onClick={submitSkill} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}


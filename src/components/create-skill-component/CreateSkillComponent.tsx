import React, { SyntheticEvent } from 'react'
import { Button, makeStyles, Theme, createStyles, MenuItem, TextField } from '@material-ui/core';
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

interface ICreateSkillComponentProps {
    categoriesToMap: Category[],
    newSkill: Skill,
    submitNewSkill: (skillToSubmit: Skill) => void,
    allSkills: Skill[]
}

export default function CreateSkillComponent(props: ICreateSkillComponentProps) {

    const fillDropdown = props.categoriesToMap.map((e: any) => {
        return <MenuItem value={e.categoryName} key={"key" + e.categoryId}>{e.categoryName}</MenuItem>
    })

    const [skillName, setSkillName] = React.useState('');
    const [categoryName, setCategoryName] = React.useState('');

    const classes = useStyles();
    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const updateCategoryName = (e: any) => {
        setCategoryName(e.target.value)
    }

    const updateSkillName = (e: any) => {
        setSkillName(e.target.value)
    }

    const submitSkill = async (e: SyntheticEvent) => {
        e.preventDefault()
        if(!categoryName) {
            return alert('Please select a category')
        }
        if(!skillName) {
            return alert('Please enter a skill name')
        }
        for (let i = 0; i < props.allSkills.length; i++) {
            if (props.allSkills[i].skillName === skillName) {
                return alert('This skill already exists')
            }
        }
        let newCategoryId: number = 0
        for (let i = 0; i < props.categoriesToMap.length; i++) {
            if (props.categoriesToMap[i].categoryName === categoryName) {
                newCategoryId = props.categoriesToMap[i].categoryId
                break
            }
            else if (i === props.categoriesToMap.length - 1) {
                return console.log('Categories don\'t match')
            } else {
                continue
            }
        }
        let skillToSubmit: Skill = {
            skillName: skillName,
            skillId: 0,
            category: {
                categoryId: newCategoryId,
                categoryName: categoryName
            }
        }
        props.submitNewSkill(skillToSubmit)
        console.log(skillToSubmit)
    }

    return (
        <div>
            <h3>Create New Skill </h3>
            <p> Select Your Category : </p>
            <FormControl variant="outlined" id="dropdown-category" className={classes.formControl} style = {{marginLeft: -2}}>
                <InputLabel ref={inputLabel}  >
                    Category 
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={categoryName}
                    labelWidth={labelWidth}
                    onClick={updateCategoryName}
                >
                    <MenuItem>
                        <em>None</em>
                    </MenuItem>
                    {fillDropdown}
                </Select>
            </FormControl>
            
            <form>
                <br/>
                <TextField onChange={updateSkillName} className="negativeMargBot" id="outlined-basic" placeholder = "Type Your Skill Name"/>
                <p></p>
                <Button onClick={submitSkill} className="negativeMargBot" variant="contained" id="btn1">Submit</Button>
            </form>
            <hr/>
            
        </div>
    )
}

import React, { SyntheticEvent } from 'react'
import { Button, makeStyles, Theme, createStyles, MenuItem, TextField, Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Skill } from '../../models/skill';
import { Category } from '../../models/category';
import Alert from '@material-ui/lab/Alert';

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
    submitNewSkill: (skillToSubmit: Skill) => any,
    categoriesToMap: Category[],
    newSkill: Skill,
    allSkills: Skill[]
}

export default function CreateSkillComponent(props: ICreateSkillComponentProps) {

    const fillDropdown = props.categoriesToMap.map((e: any) => {
        return <MenuItem value={e.categoryName} key={"key" + e.categoryId}>{e.categoryName}</MenuItem>
    })

    const [skillName, setSkillName] = React.useState('');
    const [categoryName, setCategoryName] = React.useState('');
    const [catName, setCatName] = React.useState(false);
    const [noSkill, setNoSkill] = React.useState(false);
    const [existsAlready, setExistsAlready] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    const [submitFailed, setSubmitFailed] = React.useState(false);

    const classes = useStyles();
    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const updateCategoryName = (categoryNameInput: any) => {
        setCategoryName(categoryNameInput.target.value)
    }

    const updateSkillName = (skillNameInput: any) => {
        setSkillName(skillNameInput.target.value)
    }

    const submitSkill = async (submitSkillBtn: SyntheticEvent) => {
        submitSkillBtn.preventDefault()
        if (!categoryName) {
            setCatName(true)
            setNoSkill(false)
            setExistsAlready(false)
            setSubmitSuccess(false)
            setSubmitFailed(false)
        } else if (!skillName) {
            setCatName(false)
            setNoSkill(true)
            setExistsAlready(false)
            setSubmitSuccess(false)
            setSubmitFailed(false)
        } else {
            let noError = true
            for (let i = 0; i < props.allSkills.length; i++) {
                if (props.allSkills[i].skillName === skillName) {
                    setCatName(false)
                    setNoSkill(false)
                    setExistsAlready(true)
                    setSubmitSuccess(false)
                    setSubmitFailed(false)
                    noError = false
                }
            }
            let newCategoryId: number = 0
            for (let i = 0; i < props.categoriesToMap.length; i++) {
                if (props.categoriesToMap[i].categoryName === categoryName) {
                    newCategoryId = props.categoriesToMap[i].categoryId
                    break
                }
            }
            if (noError) {
                let skillToSubmit: Skill = {
                    skillName: skillName,
                    skillId: 0,
                    category: {
                        categoryId: newCategoryId,
                        categoryName: categoryName
                    }
                }
                try {
                    let skillStatus = await props.submitNewSkill(skillToSubmit)
                    if (skillStatus.status) {
                        setCatName(false)
                        setNoSkill(false)
                        setExistsAlready(false)
                        setSubmitSuccess(true)
                        setSubmitFailed(false)
                    } else {
                        setCatName(false)
                        setNoSkill(false)
                        setExistsAlready(false)
                        setSubmitSuccess(false)
                        setSubmitFailed(true)
                    }
                } catch (error) {
                    setCatName(false)
                    setNoSkill(false)
                    setExistsAlready(false)
                    setSubmitSuccess(false)
                    setSubmitFailed(true)
                }

            }
        }
    }

    return (
        <div>
            <h3>Create New Skill </h3>
            <p> Select Your Category : </p>
            <Grid container justify="center" >
                <FormControl variant="outlined" id="dropdown-category" className={classes.formControl} style={{ marginLeft: -2 }}>
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
            </Grid>
            <form>
                <br />
                <TextField onChange={updateSkillName} className="negativeMargBot" variant="outlined" id="outlined-basic" label="Type Your Skill Name" />
                <p></p>
                <Button id="skillNameInput" onClick={submitSkill} className="negativeMargBot" variant="contained">Submit</Button>
            </form>
            <br />
            {catName && (<Alert severity="error">Please select a category</Alert>)}
            {noSkill && (<Alert severity="error">Please include a longer<br />name for your skill</Alert>)}
            {existsAlready && (<Alert severity="error">A skill by this name<br />already exists.</Alert>)}
            {submitSuccess && (<Alert severity="success">Skill Created Successfully</Alert>)}
            {submitFailed && (<Alert severity="error">An unknown error has occured,<br />please try again later</Alert>)}
            <hr />
        </div>
    )
}

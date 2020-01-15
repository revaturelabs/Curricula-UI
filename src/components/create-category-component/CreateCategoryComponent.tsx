import React, { SyntheticEvent } from 'react'
<<<<<<< HEAD
import { TextField, Button, FormControl } from '@material-ui/core'
import { curriculaSubmitCategory } from '../../remote/curricula-category'
=======
import { Button, Input } from '@material-ui/core'
import { Category } from '../../models/category'
>>>>>>> dev


interface ICreateCategoryComponentProps {
    postNewCategory: (categoryToCreate: Category) => void
    returnedNewCategory: Category
}

<<<<<<< HEAD
export class CreateCategoryComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            id: 0,
            name: ''
        }
    }

    submitCategory = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let c = await curriculaSubmitCategory(this.state.id, this.state.name)
        } catch (e) {
            console.log(e);
        }
=======
export class CreateCategoryComponent extends React.Component<ICreateCategoryComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            categoryName: '',
            categoryToCreate: new Category(0, '')
        }
    }

    updateCategoryName = (e: any) => {
        this.setState({
            ...this.state,
            categoryName: e.target.value
        })
        console.log(this.state.categoryName)
    }

    submitPostNewCategory = (e: SyntheticEvent) => {
        e.preventDefault()
        this.state.categoryToCreate.categoryName = this.state.categoryName
        this.setState({
            ...this.state,
        })
        this.props.postNewCategory(this.state.categoryToCreate)
        this.forceUpdate()
>>>>>>> dev
    }

    render() {
        return (
            <div id="createCategory-div">
                <form id="createCategory" className='createCategory'>
                    <h1> Create a Category</h1>
<<<<<<< HEAD
                    <TextField id="filled-basic" variant="outlined"
                        margin="dense"
                        name="Category"
                        placeholder="e.g. 'Devops'"
                        label="Category"
                        type="category"
                    />
                    <br />
=======
                    <Input onChange={this.updateCategoryName}></Input>
        <p>{this.state.categoryName}</p>
                    <br/>
>>>>>>> dev
                    &nbsp;
                    &nbsp;
                            <Button onClick={this.submitPostNewCategory} variant="contained" type='submit' color="primary" className='{classes.submit}'>
                        Submit
                            </Button>
                </form>
            </div>
        )
    }
}
export default CreateCategoryComponent

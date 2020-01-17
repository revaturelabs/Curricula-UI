import React, { SyntheticEvent } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Category } from '../../models/category'


interface ICreateCategoryComponentProps {
    postNewCategory: (categoryToCreate: Category) => void
    returnedNewCategory: Category
    allCategories: Category[]
}

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
    }

    submitPostNewCategory = (e: SyntheticEvent) => {
        e.preventDefault()
        if (!this.state.categoryName) {
            return alert('Please Enter a category name')
        }
        for (let i = 0; i < this.props.allCategories.length; i++) {
            if (this.props.allCategories[i].categoryName === this.state.categoryName) {
                return alert('This category already exists')
            }
        }
        this.state.categoryToCreate.categoryName = this.state.categoryName
        this.props.postNewCategory(this.state.categoryToCreate)
        this.forceUpdate()
    }

    render() {
        return (
            <div id="createCategory-div">
                <form id="createCategory" className='createCategory'>
                    <h2> Create a Category</h2>
                    <TextField onChange={this.updateCategoryName} placeholder="Type Your Category Name"></TextField>
                    <p></p>
                    <Button onClick={this.submitPostNewCategory} variant="contained" type='submit' color="primary">
                        Submit
                            </Button>
                </form>
            </div>
        )
    }
}
export default CreateCategoryComponent

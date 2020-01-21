import React, { SyntheticEvent } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Category } from '../../models/category'


interface ICreateCategoryComponentProps {
    postNewCategory: (categoryToCreate: Category) => void
    returnedNewCategory: Category
    allCategories: Category[]
}

interface ICreateCategoryComponentState {
    categoryName: string,
    categoryToCreate: Category
}

export class CreateCategoryComponent extends React.Component<ICreateCategoryComponentProps, ICreateCategoryComponentState>{
    constructor(props: any) {
        super(props)
        this.state = {
            categoryName: '',
            categoryToCreate: new Category(0, '')
        }
    }

    updateCategoryName = (categoryNameInput: any) => {
        this.setState({
            ...this.state,
            categoryName: categoryNameInput.target.value
        })
    }

    submitPostNewCategory = (submitCategoryBtn: SyntheticEvent) => {
        submitCategoryBtn.preventDefault()
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
                    <h3 id="category-header"> Create a Category </h3>
                    <TextField id="categoryNameInput" onChange={this.updateCategoryName} placeholder="Type Your Category Name"></TextField>
                    <p></p>
                    <Button id="submitCategoryBtn" onClick={this.submitPostNewCategory} variant="contained" type='submit'>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}
export default CreateCategoryComponent

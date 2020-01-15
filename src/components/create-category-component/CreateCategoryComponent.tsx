import React, { SyntheticEvent } from 'react'
import { Button, Input } from '@material-ui/core'
import { Category } from '../../models/category'


interface ICreateCategoryComponentProps {
    postNewCategory: (categoryToCreate: Category) => void
    returnedNewCategory: Category
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
    }

    render() {
        return (
            <div id="createCategory-div">
                <form id="createCategory" className='createCategory'>
                    <h1> Create a Category</h1>
                    <Input onChange={this.updateCategoryName}></Input>
        <p>{this.state.categoryName}</p>
                    <br/>
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

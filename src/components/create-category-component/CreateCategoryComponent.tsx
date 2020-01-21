import React, { SyntheticEvent } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Category } from '../../models/category'
import Alert from '@material-ui/lab/Alert'


interface ICreateCategoryComponentProps {
    postNewCategory: (categoryToCreate: Category) => any
    returnedNewCategory: Category
    allCategories: Category[]
}

export class CreateCategoryComponent extends React.Component<ICreateCategoryComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            categoryName: '',
            categoryToCreate: new Category(0, ''),
            catName: false,
            existsAlready: false,
            submitSuccess: false,
            submitFailed: false
        }
    }

    updateCategoryName = (e: any) => {
        this.setState({
            ...this.state,
            categoryName: e.target.value
        })
    }

    submitPostNewCategory = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (!this.state.categoryName) {
            this.setState({
                ...this.state,
                catName: true,
                existsAlready: false,
                submitSuccess: false,
                submitFailed: false
            })
        } else {
            let noError = true
            for (let i = 0; i < this.props.allCategories.length; i++) {
                if (this.props.allCategories[i].categoryName === this.state.categoryName) {
                    this.setState({
                        ...this.state,
                        catName: false,
                        existsAlready: true,
                        submitSuccess: false,
                        submitFailed: false
                    })
                    noError = false
                    break
                }
            }
            if (noError) {
                try {
                    this.state.categoryToCreate.categoryName = this.state.categoryName
                    let catStatus = await this.props.postNewCategory(this.state.categoryToCreate)
                    if (catStatus.status === 200) {
                        this.setState({
                            ...this.state,
                            catName: false,
                            existsAlready: false,
                            submitSuccess: true,
                            submitFailed: false
                        })
                    } else {
                        this.setState({
                            ...this.state,
                            catName: false,
                            existsAlready: false,
                            submitSuccess: false,
                            submitFailed: true
                        })
                    }
                } catch (error) {
                    this.setState({
                        ...this.state,
                        catName: false,
                        existsAlready: false,
                        submitSuccess: false,
                        submitFailed: true
                    })
                }
            }
        }
    }

    render() {
        return (
            <div id="createCategory-div">
                <form id="createCategory" className='createCategory'>
                    <h3 id="category-header"> Create a Category </h3>
                    <TextField onChange={this.updateCategoryName} label="Type Your Category Name" variant="outlined" />
                    <p></p>
                    <Button onClick={this.submitPostNewCategory} id="btn2" variant="contained" type='submit'>
                        Submit
                            </Button>
                </form>
                {this.state.catName && (<Alert severity="error">Please include a longer<br /> name for your category</Alert>)}
                {this.state.existsAlready && (<Alert severity="error">A category by this name<br /> already exists.</Alert>)}
                {this.state.submitSuccess && (<Alert severity="success">Category Created Successfully</Alert>)}
                {this.state.submitFailed && (<Alert severity="error">Something went wrong try again</Alert>)}
            </div>
        )
    }
}
export default CreateCategoryComponent

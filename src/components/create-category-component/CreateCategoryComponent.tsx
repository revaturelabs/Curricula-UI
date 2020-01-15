import React, { SyntheticEvent } from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'
import { curriculaSubmitCategory } from '../../remote/curricula-category'



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
    }

    render() {
        return (
            <div id="createCategory-div">
                <form id="createCategory" className='createCategory'>
                    <h1> Create a Category</h1>
                    <TextField id="filled-basic" variant="outlined"
                        margin="dense"
                        name="Category"
                        placeholder="e.g. 'Devops'"
                        label="Category"
                        type="category"
                    />
                    <br />
                    &nbsp;
                    &nbsp;
                            <Button variant="contained" type='submit' color="primary" className='{classes.submit}'>
                        Submit
                            </Button>
                </form>
            </div>
        )
    }
}
export default CreateCategoryComponent

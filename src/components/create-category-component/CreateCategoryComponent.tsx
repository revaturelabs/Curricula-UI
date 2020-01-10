import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { string } from 'prop-types'



export class CreateCategoryComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            categoryName: string,

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
                    <br/>
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

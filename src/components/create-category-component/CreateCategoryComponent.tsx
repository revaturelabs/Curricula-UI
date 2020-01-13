import React from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'
import { string } from 'prop-types'



export class CreateCategory extends React.Component<any, any>{
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
                    <p> Create a Category</p>
                    <TextField id="filled-basic" variant="outlined"
                        margin="dense"
                        name="Category"
                        placeholder="e.g. 'Devops'"
                        label="Category"
                        type="category"
                    />
                    <br></br>
                   
                            <Button size="medium" variant="contained" type='submit' color="primary" className='{classes.submit}'>
                        Submit
                            </Button>
                </form>
            </div>
        )
    }
}
export default CreateCategory

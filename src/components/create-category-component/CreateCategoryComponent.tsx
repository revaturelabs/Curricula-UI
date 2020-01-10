import React from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'
import { string } from 'prop-types'



export class CreateCategoryComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            categoryName: string,

        }
    }

    checkInputForNumbers(input: any){
        var hasNumber = /\d/;
        if(hasNumber.test(input)){
            this.setState({
                wrongInput: false,
            })
            return this.state;
        }

    }




    render() {
        return (
            <div id="createCategory-div">
                <form id="createCategory" className='createCategory'>
                <FormControl error = {this.state.checkInputForNumbers}>
                    <h1> Create a Category</h1>
                    <TextField id="filled-basic" variant="outlined"
                        margin="dense"
                        name="Category"
                        placeholder="e.g. 'Devops'"
                        label="Category"
                        type="category"
                    />
                </FormControl>
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

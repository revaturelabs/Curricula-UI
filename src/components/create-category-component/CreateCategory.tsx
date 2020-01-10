import React from 'react'
import { TextField, Button} from '@material-ui/core'
import { string } from 'prop-types'
// import { Redirect } from 'react-router-dom'



// function checkCategory(input: { value: string; }) {

//     // Check if input contains a digit
//     if (/\d/.test(input.value)) {
//         alert('Name contains a number');

//     }

//     // Check if input is empty
//     if (input.value === '') {
//         alert('Name is empty');
//     }

//     return true;
// }

interface Category {
     
    newCategoryName: Category
}

export class CreateCategory extends React.Component <any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            categoryName: string,
            
        }
    }


    postCategoryName = (e: any) => {
        this.setState({
            ...this.state,
            categoryName: e.target.value
        })
    }
            // left in here to fix later, would want to use for typecheck
//     checkCategory = (e: { value: string; }) => {
//         // this.setState({
//         //     ...this.state,
//         //     checkCategory: input.value
//         // });

//         // Check if input contains a digit
//         if (/\d/.test(e.value)) {
         
//          return alert('Name contains a number');

//      }
 
//      // Check if input is empty
//      if (e.value === '') {
//          return alert('Name is empty');

//      }
//      return alert('Name contains a number');


//     //  this.setState({
//     //     ...this.state,
//     //     checkCategory: input.target.value
//     // });
//  }



        render () {
            return (
                <div id = "createCategory-div">                    
                    <form id = "createCategory"  className = 'createCategory'>
                        <h1> Create a Category</h1>
                            {/* <FormControl error> */}
                                <TextField id="filled-basic"  variant="outlined" 
                                    value = {this.state.newCategoryName}
                                    onChange= {this.state.checkCategory} 
                                    margin= "dense"
                                    name="Category"
                                    placeholder = "e.g. 'Devops'"
                                    label= "Category"

                                    type = "category"
                                />
                            {/* Shows error underneath input form if category has a number */}
                            {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}

                            {/* </FormControl> */}

                                <br/>


                        {/* adds space in-between buttons */}
                            &nbsp;
                            &nbsp;


                            <Button variant = "contained"  type = 'submit' color ="primary" className='{classes.submit}'>
                                Submit
                            </Button>
                            </form>
                            </div>
            )
        }
}
export default CreateCategory

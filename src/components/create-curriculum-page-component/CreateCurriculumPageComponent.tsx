import React from 'react';
import { Curriculum } from '../../models/curriculum';
import PopupButtonComponent from '../popup-component/PopupButtonComponent';

interface ICreateCurriculumPageProps{
    newCurriculm: Curriculum
}

interface ICreateCurriculumPageState{
    newCurriculm: Curriculum    
}

export class CreateCurriculumPageComponent extends React.Component<ICreateCurriculumPageProps,ICreateCurriculumPageState>{
    constructor(props:any){
        super(props)
        this.state={
            newCurriculm: new Curriculum(0, '', [])
        }
    }

    render() {
        return(
            <div>
                
                <PopupButtonComponent/>




            </div>
        )
    }
}
import React from 'react'
import { SkillPillComponent } from '../skill-pill-component/SkillPillComponent';
import { Input, Form } from 'reactstrap';
import { SyntheticEvent } from 'react';

export class CreateCurriculumComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            curriculumName: '',
            filter: ''
        }
    }

  updateFilter(value) {
      this.setState({
          filter: value
      });
  }
  

    render() {
        return (
            <>
                <Form onSubmit={this.callSubmitCurriculum}>
                <Input value={this.state.curriculumName} onChange={this.updateCurriculumName} type="text" id="curriculumName" placeholder="Enter a name for the curriculum" required />
                <Input value={this.state.filter} onChange={this.updateFilter} type="text" id="filter" placeholder="Type to filter..." />
                <SkillPillComponent />
                </Form>
            </>
        )
    }
}


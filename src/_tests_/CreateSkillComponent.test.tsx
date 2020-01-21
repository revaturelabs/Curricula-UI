// __tests__/CreateSkillComponent-test.ts
import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
//import CreateSkillComponent from '../components/create-skill-component/CreateSkillComponent';
import { FormControl } from '@material-ui/core';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Create Skill component', () => {
    it('renders a div on component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    // it('starts with initial text', () => {
    //   const wrapper = shallow(<FormControl />);
    //   const text = wrapper.find('div').text();
    //   expect(text).toEqual('Create New Skill ');
    // });

    // it('starts with initial text', () => {
    //     const wrapper = shallow(<FormControl />);
    //     const text = wrapper.find('div').text();
    //     expect(text).toEqual(' Select Your Category : ');
    // });

});

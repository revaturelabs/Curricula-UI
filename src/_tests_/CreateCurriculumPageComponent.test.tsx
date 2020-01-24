import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
import NavBarComponent from '../components/navbar-component/NavBarComponent';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Create Curriculum component', () => {
    it('renders a div on component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('starts with initial text', () => {
      const wrapper = shallow(<NavBarComponent />);
      const text = wrapper.find('div').text();
      expect(text).toEqual('HomeVisualizationNew Curriculum');
    });  

});
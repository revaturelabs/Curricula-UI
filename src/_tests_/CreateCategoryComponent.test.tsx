import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
import CreateCategoryComponent from '../components/create-category-component/CreateCategoryContainer';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Create Category component', () => {
    it('renders a div on component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('starts with initial text', () => {
      const wrapper = shallow(<CreateCategoryComponent />);
      const text = wrapper.find('h3').text();
      expect(text).toEqual(' Create a Category ');
    });  

});
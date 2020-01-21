// __tests__/VisualizationDisplayComponent-test.ts
import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Create Visualization Display component', () => {
    it('renders a div on component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    // it('starts with initial text', () => {
    //   const wrapper = shallow(<VisualizationDisplayComponent />);
    //   const text = wrapper.find('div').text();
    //   expect(text).toEqual('Visualization ');
    // });  

});

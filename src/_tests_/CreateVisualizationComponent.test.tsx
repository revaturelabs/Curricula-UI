// __tests__/CreateVisualizationComponent-test.ts
import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
//import CreateVisualizationComponent from '../components/create-visualization-component/CreateVisualizationComponent'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Create Visualization component', () => {
    it('renders a div on component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    // it('starts with initial text', () => {
    //   const wrapper = shallow(<CreateVisualizationComponent />);
    //   const text = wrapper.find('h3').text();
    //   expect(text).toEqual(' Create a Visualization ');
    // });  

});
  

// it('Component changes text after click', () => {
//     const {queryByLabelText, getByLabelText} = render(
//       <CreateVisualizationComponent labelOn="On" labelOff="Off" />,
//     );
    
//     expect(queryByLabelText(/off/i)).toBeTruthy();

//     fireEvent.click(getByLabelText(/off/i));
  
//     expect(queryByLabelText(/on/i)).toBeTruthy();
// });



// __tests__/CreateCategoryComponent-test.ts
import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
//import CreateCategoryComponent from '../components/create-category-component/CreateCategoryComponent';
import { shallow } from 'enzyme';
import App from '../App';
import CreateCategoryComponent from '../components/create-category-component/CreateCategoryComponent';

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
  




// it('Component changes text after click', () => {
//     const {queryByLabelText, getByLabelText} = render(
//       <CreateCategoryComponent labelOn="On" labelOff="Off" />,
//     );
    
//     expect(queryByLabelText(/off/i)).toBeTruthy();

//     fireEvent.click(getByLabelText(/off/i));
  
//     expect(queryByLabelText(/on/i)).toBeTruthy();
// });

// describe('Create Category component', () => {
//     it('starts with initial text', () => {
//         const wrapper = shallow(<App/>);
//       const text = wrapper.find('h3').text();
//       expect(text).toEqual('Count: 0');
//     });
// });


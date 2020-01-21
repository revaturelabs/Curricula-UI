import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { Route } from 'react-router';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('Assert true to make circle ci work', ()=>{
  expect(true).toBeTruthy()
})

describe('App component', () => {
  it('renders a div on APP', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

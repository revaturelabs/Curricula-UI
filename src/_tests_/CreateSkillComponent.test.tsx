// __tests__/CreateSkillComponent-test.ts
import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import App from '../App';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Create Skill component', () => {
    it('renders a div on component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
});
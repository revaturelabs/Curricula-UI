import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {CreateCategory} from '../src/components/create-category-component/CreateCategory';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
          <Route path = '/category' component = {CreateCategory}/>
            <Route path='/' />
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

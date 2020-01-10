import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SkillComponent from './components/skill-component/SkillComponent';
import PopupComponent from './components/popup-component/PopupButtonComponent';
import CreateCategory from './components/create-category-component/CreateCategory';



const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/testpopupbutton' component={PopupComponent}></Route>
            <Route path='/skill' component={SkillComponent}/>
            <Route path= '/create_category' component ={CreateCategory}></Route>
            <Route path='/' />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

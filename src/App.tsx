import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SearchCurriculumComponent } from './components/search-curriculum-component/SearchCurriculumComponent';
import PopupComponent from './components/popup-component/PopupButtonComponent';
import CreateCategory from './components/create-category-component/CreateCategory';
import { CreateCurriculumComponent } from './components/create-curriculum-component/CreateCurriculumComponent';


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/createcurriculum' component={CreateCurriculumComponent} />
            <Route path='/search' component={SearchCurriculumComponent} />
            <Route path='/testpopupbutton' component={PopupComponent}></Route>
            <Route path= '/create_category' component ={CreateCategory}></Route>
            <Route path='/' />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

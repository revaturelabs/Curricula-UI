import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SkillComponent from './components/create-skill-component/CreateSkillComponent';
import { SearchCurriculumComponent } from './components/search-curriculum-component/SearchCurriculumComponent';
import { CreateCurriculumComponent } from './components/create-curriculum-component/CreateCurriculumComponent';
import { CreateCurriculumPageComponent } from './components/create-curriculum-page-component/CreateCurriculumPageComponent';



const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/createcurriculum' component={CreateCurriculumComponent} />
            <Route path='/createcurriculumpage' component={CreateCurriculumPageComponent}></Route>
            <Route path='/search' component={SearchCurriculumComponent} />
            <Route path='/skill' component={SkillComponent} />
            <Route path='/' />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

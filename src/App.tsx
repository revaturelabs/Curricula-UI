import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SkillComponent from './components/create-skill-component/CreateSkillComponent';
import CreateCurriculumPageComponent from './components/create-curriculum-page-component/CreateCurriculumPageContainer';
import ViewAllVisualizationsContainer from './components/view-all-visualizations-component/ViewAllVisualizationsContainer';
import SearchCurriculumContainer from './components/search-curriculum-component/SearchCurriculumContainer';



const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/createcurriculumpage' component={CreateCurriculumPageComponent}></Route>
            <Route path='/skill' component={SkillComponent} />
            <Route path='/search' component={SearchCurriculumContainer} />
            <Route path='/' component={ViewAllVisualizationsContainer} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

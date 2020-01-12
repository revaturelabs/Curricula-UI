import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SkillComponent from './components/create-skill-component/CreateSkillComponent';
<<<<<<< HEAD
import  CreateCurriculumPageComponent  from './components/create-curriculum-page-component/CreateCurriculumPageContainer';
import ViewAllVisualizationsContainer from './components/view-all-viz-component/ViewAllVisualizationsContainer';
=======
import { SearchCurriculumComponent } from './components/search-curriculum-component/SearchCurriculumComponent';
import { CreateCurriculumComponent } from './components/create-curriculum-component/CreateCurriculumComponent';
import { CreateCurriculumPageComponent } from './components/create-curriculum-page-component/CreateCurriculumPageComponent';
import ViewAllVisualizationsContainer from './components/view-all-visualizations-component/ViewAllVisualizationsContainer';
>>>>>>> 8ee99cc85780348939cd9b2cba2b6888a2532d0a



const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/createcurriculumpage' component={CreateCurriculumPageComponent}></Route>
            <Route path='/skill' component={SkillComponent} />
            <Route path='/' component={ViewAllVisualizationsContainer} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

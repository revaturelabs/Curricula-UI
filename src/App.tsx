import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SkillComponent from './components/create-skill-component/CreateSkillComponent';
import CreateCurriculumPageComponent from './components/create-curriculum-component/CreateCurriculumContainer';
import ViewAllVisualizationsContainer from './components/view-all-visualizations-component/ViewAllVisualizationsContainer';
import SearchCurriculumContainer from './components/create-visualization-component/CreateVisualizationContainer';
import { VisualizationComponent } from './components/visualization-component/VisualizationDisplayComponent';
import CreateCategoryComponent from './components/create-category-component/CreateCategoryContainer'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F26925',
    },
    secondary: {
      main: '#F26925',
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path='/vis/createcurriculumpage' component={CreateCurriculumPageComponent} />
              <Route path='/vis/skill' component={SkillComponent} />
              <Route path='/vis/search' component={SearchCurriculumContainer} />
              <Route path='/vis/visualizations/:visualization' component={VisualizationComponent} />
              <Route path='/vis/createcategory' component={CreateCategoryComponent} />
              <Route path='/vis/' component={ViewAllVisualizationsContainer} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
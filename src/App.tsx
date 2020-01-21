import React from 'react';
import './App.css';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SkillComponent from './components/create-skill-component/CreateSkillComponent';
import CreateCurriculumPageComponent from './components/create-curriculum-page-component/CreateCurriculumPageContainer';
import ViewAllVisualizationsContainer from './components/view-all-visualizations-component/ViewAllVisualizationsContainer';
import SearchCurriculumContainer from './components/search-curriculum-component/SearchCurriculumContainer';
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
              <Route path='/createcurriculumpage' component={CreateCurriculumPageComponent} />
              <Route path='/skill' component={SkillComponent} />
              <Route path='/search' component={SearchCurriculumContainer} />
              <Route path='/visualizations/:visualization' component={VisualizationComponent} />
              <Route path='/createcategory' component={CreateCategoryComponent} />
              <Route path='/' component={ViewAllVisualizationsContainer} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Redirector from 'react-redirector';
import projectsUrl from './constants';

class ProjectsRedirector extends Component {
  renderProject = () => {
    const { pathname: project } = window.location;
    return <Redirector to={`${projectsUrl}${project}`} />;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route component={this.renderProject} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<ProjectsRedirector />, document.getElementById('redirect'));

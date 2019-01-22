import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Redirecter  from './redirecting';
import './index.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route component={Redirecter} />
            </Switch>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Redirector from 'react-redirector';
import './index.css';

const info = {
    currentURL: window.location.pathname,
    to: 'projects.abranhe.com',
    http: 'https://'
}

const NoMatch = () => {
    return(
        <div className="app">
        <header className="app-header">
            <h3>Redirecting to</h3>
            <div>
            <code>projects.abranhe.com{info.currentURL}</code>
            <Redirector to={info.http + info.to + info.currentURL}/>
        </div>
        </header>
        </div>  
    );
}

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

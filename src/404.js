import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

const info = {
  currentURL: window.location.pathname,
  to: 'projects.abranhe.com',
  http: 'https://'
}

class App extends Component {
  render() {
    return (
        <Router>
        <div className="app">
        <header className="app-header">
        <h3>Redirecting to </h3> <code>projects.abranhe.com{info.currentURL}</code>
        <Route  path="*" component={() => {
            window.location = info.http + info.to + info.currentURL
        }}/>
        404
        </header>
        </div>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

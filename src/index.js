import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

const info = {
  currentURL: window.location.pathname,
  to: 'projects.abranhe.com',
  http: 'https://'
}

class Redirect extends Component {
    constructor( props ) {
      super();
      this.state = { ...props };
    }
    componentWillMount() {
      window.location = info.http + info.to + info.currentURL;
    }
    render() {
      return (
        <div>
            <h3>Redirecting to </h3>
            <code>projects.abranhe.com{info.currentURL}</code>
        </div>
      );
    }
  }
  
class App extends Component {
  render() {
    return (
        <Router>
        <div className="app">
        <header className="app-header">
        <Route component={ Redirect }/>
        </header>
        </div>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

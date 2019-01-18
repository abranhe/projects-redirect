import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

const info = {
  currentURL: window.location.pathname,
  to: 'projects.abranhe.com',
  http: 'https://'
}

const Default = () => (
    <div>
        <code>projects.abranhe.com{info.currentURL}</code>
    </div>
);

const Test = () => (
    <div>
        <code>projects.abranhe.com{info.currentURL}</code>
    </div>
);

const NoMatch = () => (
    <div>
        <code>projects.abranhe.com{info.currentURL}</code>
        <Route  path="*" component={() => {
            window.location = info.http + info.to + info.currentURL
        }}/>
    </div>
);

class App extends Component {
  render() {
    return (
        <Router>
        <div className="app">
        <header className="app-header">
        <h3>Redirecting to </h3> 
        <Switch>
            <Route path="/" exact component={Default}/>
            <Route path="/test" component={Test}/>
            <Route component={NoMatch} />
      </Switch>
        </header>
        </div>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Redirecter  from './helper';
import './index.css';

const Test = () => ( <div> Test </div> );

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/test" component={Test}/>
                <Route component={Redirecter} />
            </Switch>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

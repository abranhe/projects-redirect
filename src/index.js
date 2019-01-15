import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = {
  currentURL: window.location.pathname,
  to: 'projects.abranhe.com',
  http: 'https://'
}

// window.location = info.http + info.to + info.currentURL;
  
class App extends Component {
  render() {
    return (
        <div className="app">
        <header className="app-header">
        Redirecting to
          <a className="app-link"
            href={info.http + info.to + info.currentURL}
            rel="noopener noreferrer"
          >
            {info.to + info.currentURL}
          </a>
        </header>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('redirect'));

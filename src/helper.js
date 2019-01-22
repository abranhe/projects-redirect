import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const info = {
    currentURL: window.location.pathname,
    to: 'projects.abranhe.com',
    http: 'https://'
  }

  export default class Redirecter extends Component {

    render() {
        return (
            <div className="app">
            <header className="app-header">
                <h3>Redirecting to </h3> 
                
                <div>
                <code>projects.abranhe.com{info.currentURL}</code>
                <Route  path="*" component={() => {
                    window.location = info.http + info.to + info.currentURL
                }}/>
            </div>
            </header>
            </div>
        );
    }
}
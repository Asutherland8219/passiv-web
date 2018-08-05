import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountGroupPage from './pages/AccountGroupPage';
import DashboardPage from './pages/DashboardPage';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container mx-auto shadow bg-grey-lightest">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-no-shrink text-black mr-6">
            <span className="font-semibold text-xl tracking-tight">Passiv</span>
          </div>
        </nav>
        <Router>
            <Switch>
              <Route path="/group" component={AccountGroupPage} />
              <Route path="/" component={DashboardPage} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
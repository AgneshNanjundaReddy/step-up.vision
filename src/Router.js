import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Reg from './components/reg-form-component';
import UserList from './components/user-list-component';
import Dashboard from './components/daskboard';

export default () => {
  return (
    <div>
        
        <header className="header">
            step-up.vision
        </header>
        <Router>
            <Switch>
                <Route path="/registration">
                    <Reg />
                </Route>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    </div>
 )
  }
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';

function Main() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    );
}

export default Main;

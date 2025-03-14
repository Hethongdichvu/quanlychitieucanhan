import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpensePage from './pages/ExpensePage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/expenses" component={ExpensePage} />
            </Switch>
        </Router>
    );
};

export default App;
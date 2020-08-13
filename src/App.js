import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Switch>
                <Main />
                <Route path="/a" exact component={Home} />
                <ProtectedRoute path="/main" component={Main} />
                <Route path="/as" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;

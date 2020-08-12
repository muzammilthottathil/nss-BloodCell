import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Switch>
                {/* <Main /> */}
                <Route path="/nss-BloodCell/" exact component={Home} />
                <ProtectedRoute path="/nss-BloodCell/main" component={Main} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;

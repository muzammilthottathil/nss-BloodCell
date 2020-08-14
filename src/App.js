import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ProtectedRoute  from './components/ProtectedRoute';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* <Main /> */}
                    <Route path="/" exact component={Home} />
                    <ProtectedRoute path="/main" component={Main} props={this.props}/>
                    <Route path="*" component={Home} />
                </Switch>
            </Router>
        );
    }   
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(App);

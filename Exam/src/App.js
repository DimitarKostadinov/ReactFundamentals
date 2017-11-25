import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/HomePage/HomePage';
import YearBalance from './components/BalancePage/YearBalance';
import MonthBalance from './components/BalancePage/MonthBalance';
import PrivateRoute from './components/common/PrivateRoute';
import toastr from 'toastr';


class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
        toastr.success('Logged out!')
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
                <Switch>
                    <PrivateRoute  path="/year/:year" component={YearBalance} />
                    <PrivateRoute  path="/plan/:year/:month" component={MonthBalance} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
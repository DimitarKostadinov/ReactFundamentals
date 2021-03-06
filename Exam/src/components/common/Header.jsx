import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <header>
               <nav className="navbar navbar-dark bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                    {loggedIn && <NavLink className="nav-link" to="/plan/2018/1" >Monthly Balance</NavLink>}
                    {loggedIn &&  <NavLink className="nav-link" to="/year/2018">Yearly Balance</NavLink>}
                    {loggedIn && <a  className="nav-link" href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                        
                    {!loggedIn &&   <NavLink className="nav-link" to="/login">Login</NavLink>}
                    {!loggedIn &&   <NavLink className="nav-link active" to="/register">Register</NavLink>}
                    </div>
                </div>
            </div>
        </nav>
            </header>
        );
    }
}

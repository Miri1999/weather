import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Login } from './login'
import { Register } from './register'
import  TheWeather from './the-weather'
import  HomePage from './home'
import { History } from './history'
// import NavbarPage from './'
export function MyRouter(props) {
    return (
        <>
            {props.children}
            {/* <NavbarPage></NavbarPage> */}
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/Weather">
                    <TheWeather />
                </Route>
                <Route path="/History">
                    <History />
                </Route>
                <Route path="/">
                <HomePage />
                </Route>
            </Switch>


        </>
    )
}

import React, { Fragment } from 'react';
import history from '../common/history';
import { Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Brands from '../brands/Brands';

export const RootContainer = () => (
    <Fragment>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/brands' component={Brands} />
               
            </Switch>
        </Router>
    </Fragment>
);
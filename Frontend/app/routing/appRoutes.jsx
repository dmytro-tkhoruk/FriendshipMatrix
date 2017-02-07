'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App.jsx';
import MainContainer  from '../containers/Main.container.jsx';
import RegisterContainer  from '../containers/Register.container.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainContainer}/>
        <Route path="/" component={MainContainer}>
            <Route path="register" component={RegisterContainer}/>
        </Route>
    </Route>
);
'use strict';

import { combineReducers } from 'redux';

import auth from './auth.reducer';
import network from './network.reducer';
import snackbar from './snackbar.reducer';
import users from './users.reducer';

const rootReducer = combineReducers({
    auth,
    network,
    snackbar,
    users
});

export default rootReducer;
'use strict';

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { Router }   from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import rootStore     from './store/root.store';
import routes       from './routing/appRoutes.jsx';
import appHistory   from './routing/appHistory';
import localStorage from './storage/localStorage';

import {AUTH_TOKEN} from './constants/auth.constants';

const initialState = {
    users: {
        currentUser: {_id: "1", name: "Dmytro Tkhoruk", gender: "male"},
        usersList: [
            {
                groupName: "Friends",
                users: [
                    {_id: "2", name: "Friend1", gender: "male", isFriend: true},
                    {_id: "3", name: "Friend2", gender: "female", isFriend: true},
                    {_id: "4", name: "Friend3", gender: "female", isFriend: true},
                    {_id: "5", name: "Friend4", gender: "male", isFriend: true},
                ]
            },
            {
                groupName: "Friendship level #2",
                users: [
                    {_id: "6", name: "Friendship1", gender: "female", isFriend: false},
                    {_id: "7", name: "Friendship2", gender: "male", isFriend: false},
                    {_id: "8", name: "Friendship3", gender: "male", isFriend: false}
                ]
            },
            {
                groupName: "Other",
                users: [
                    {_id: "9", name: "Other1", gender: "male", isFriend: false},
                    {_id: "10", name: "Other2", gender: "female", isFriend: false},
                    {_id: "11", name: "Other3", gender: "female", isFriend: false}
                ]
            }
        ]
    },
    network: {
        showProgressBar: false
    },
    auth:{
        //isAuthorized: localStorage.get(AUTH_TOKEN)
        isAuthorized: "true"
    },
    snackbar: {
        snackBarMsg: null
    }
};

const store = rootStore(initialState);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router children={routes} history={appHistory} />
        </Provider>
    </MuiThemeProvider>,

    document.getElementById('root')
);

'use strict';

import api from '../config/apiSingleton';
import LocalStorage from '../storage/localStorage'

import * as networkConstants from '../constants/network.constants';
import * as usersConstants from '../constants/users.constants';
import * as authConstants from '../constants/auth.constants';

export function login(params = {}) {
    return (dispatch) => {
        dispatch({
            type: networkConstants.SHOW_LOADER
        });

        api.auth.login(params)
            .then((resp) => {
                const token = resp.Token;

                if (token) {
                    LocalStorage.set(authConstants.AUTH_TOKEN, token);
                }

                dispatch({
                    type: authConstants.SET_IS_AUTHORIZED,
                    isAuthorized: true
                });

                dispatch({
                    type: usersConstants.UPDATE_USERS,
                    users: resp.users
                });

                dispatch({
                    type: networkConstants.HIDE_LOADER
                });
            })
            .catch((resp) => {
                dispatch({
                    type: networkConstants.NETWORK_ERROR,
                    status: resp.status
                })
            })
    };
}

export function logout() {
    LocalStorage.remove(authConstants.AUTH_TOKEN);

    return (dispatch) => {
        dispatch({
            type: authConstants.SET_IS_AUTHORIZED,
            isAuthorized: false
        });

        dispatch({
            type: usersConstants.UPDATE_USERS,
            users: {}
        });
    };
}


'use strict';
import api from '../config/apiSingleton';
import LocalStorage from '../storage/localStorage'

import * as networkConstants from '../constants/network.constants';
import * as authConstants from '../constants/auth.constants';

export function login(params = {}) {
    return (dispatch) => {
        dispatch({
            type: networkConstants.SHOW_PROGRESSBAR
        });

        api.authorization.login(params)
            .then((resp) => {
                let token = resp.Token;

                if (token) {
                    LocalStorage.set(authConstants.AUTH_TOKEN, token);
                }

                dispatch({
                    type: authConstants.SET_IS_AUTHORIZED,
                    isAuthorized: true
                })
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
    return {
        type: authConstants.SET_IS_AUTHORIZED,
        isAuthorized: false
    }
}


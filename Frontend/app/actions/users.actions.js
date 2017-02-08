'use strict';

import api from '../config/apiSingleton';

import * as networkConstants from '../constants/network.constants';
import * as usersConstants from '../constants/users.constants';

export function registerUser(params) {
    return (dispatch) => {
        dispatch({
            type: networkConstants.SHOW_LOADER
        });

        api.users.registerUser(params)
            .then(() => {
                dispatch({
                    type: usersConstants.REGISTER_USER
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

export function addFriendship(params) {
    return (dispatch) => {
        dispatch({
            type: networkConstants.SHOW_LOADER
        });

        api.users.addFriendship(params)
            .then((resp) => {
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

export function removeFriendship(params) {
    return (dispatch) => {
        dispatch({
            type: networkConstants.SHOW_LOADER
        });

        api.users.removeFriendship(params)
            .then((resp) => {
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
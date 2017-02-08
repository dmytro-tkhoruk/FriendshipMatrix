'use strict';

import * as networkConstants from '../constants/network.constants';
import * as snackbarConstants from '../constants/snackbar.constants';

export default function (state = [], action) {
    switch (action.type) {
        case networkConstants.NETWORK_ERROR: {
            return {
                ...state,
                snackBarMsg: "Network Error " + action.status
            };
        }
            break;

        case snackbarConstants.SHOW_MESSAGE: {
            return {
                ...state,
                snackBarMsg: action.message
            };
        }
            break;

        default: return state;
    }
}
'use strict';

import * as networkConstants from '../constants/network.constants';

export default function(state = {}, action) {
    switch (action.type) {
        case networkConstants.NETWORK_ERROR: {
            return {
                ...state,
                showProgressBar: false
            };
        }
            break;
        case networkConstants.NETWORK_SUCCESS: {
            return {
                ...state,
                showProgressBar: false
            };
        }
            break;

        case networkConstants.SHOW_PROGRESSBAR: {
            return {
                ...state,
                showProgressBar: true
            };
        }
            break;

        case networkConstants.HIDE_PROGRESSBAR: {
            return {
                ...state,
                showProgressBar: false
            };
        }
            break;

        default: return state;
    }
}
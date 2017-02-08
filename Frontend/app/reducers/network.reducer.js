'use strict';

import * as networkConstants from '../constants/network.constants';

export default function(state = {}, action) {
    switch (action.type) {
        case networkConstants.NETWORK_ERROR: {
            return {
                ...state,
                showLoader: false
            };
        }
            break;

        case networkConstants.SHOW_LOADER: {
            return {
                ...state,
                showLoader: true
            };
        }
            break;

        case networkConstants.HIDE_LOADER: {
            return {
                ...state,
                showLoader: false
            };
        }
            break;

        default: return state;
    }
}
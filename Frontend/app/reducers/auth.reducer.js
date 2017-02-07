'use strict';

import * as authConstants from '../constants/auth.constants';

export default function(state = {}, action) {
    switch (action.type) {
        case authConstants.SET_IS_AUTHORIZED: {
            return {
                ...state,
                isAuthorized: action.isAuthorized
            };
        }
            break;

        default: return state;
    }
}
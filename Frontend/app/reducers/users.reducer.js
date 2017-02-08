'use strict';

import * as usersConstants from '../constants/users.constants';

export default function(state = {}, action) {
    switch (action.type) {
        case usersConstants.UPDATE_USERS: {
            return {...action.users} ;
        }
            break;

        default: return state;
    }
}
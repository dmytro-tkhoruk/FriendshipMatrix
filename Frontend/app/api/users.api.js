'use strict';

import Base from './base.api';

class UsersApi extends Base {

    registerUser(params) {
        const url = '/register/';
        const payload = params;
        return this.apiClient.post(url, payload);
    }

    addFriendship(params) {
        const url = '/friendship/';
        const payload = params;
        return this.apiClient.post(url, payload);
    }

    removeFriendship(params) {
        const url = `/friendship/${params.currentUserId}/${params.userId}`;
        return this.apiClient.delete(url);
    }
}

export default UsersApi;
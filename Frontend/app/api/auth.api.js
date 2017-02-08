'use strict';

import Base from './base.api';

class AuthApi extends Base {
    login(params) {
        const url = '/login/';
        const payload = params;

        console.log(payload);
        return this.apiClient.post(url, payload);
    }
}

export default AuthApi;

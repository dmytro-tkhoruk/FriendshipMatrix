'use strict';

import ClientApi from './client.api';
import AuthApi  from './auth.api';
import UsersApi  from './users.api';

export default function({apiPrefix} = {}) {
    if (!apiPrefix) throw '[apiPrefix] is required';

    const api = new ClientApi({ prefix: apiPrefix });

    return {
        authorization: new AuthApi({ apiClient: api }),
        users: new UsersApi({ apiClient: api })
    };
}

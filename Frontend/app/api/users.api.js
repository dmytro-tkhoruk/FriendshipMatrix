'use strict';

import Base from './base.api';

class UsersApi extends Base {

    registerUser(params) {
        /*const url = 'user/';
        const payload = {
            name:params.name,

        };
        return this.apiClient.post(url, payload);*/
    }

    addFriendship(params) {
        /*const url = `db/table/${params.tableId}`;
        return this.apiClient.delete(url);*/
    }

    removeFriendship(params) {
        /*const tablePager = params.tablePager || pagerConstants.DEFAULT_PAGER;
        const url = `db/table/${params.tableId}/${tablePager.pageSize}/${tablePager.pageNumber+1}`;
        return this.apiClient.delete(url);*/
    }
}

export default UsersApi;
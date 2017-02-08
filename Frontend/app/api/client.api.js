'use strict';

import axios from 'axios';
import queryString from 'query-string';
import LocalStorage from '../storage/localStorage';

import * as authConstants from "../constants/auth.constants";

class ClientApi {
    constructor({ prefix }) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    post(requestUrl, payload = {}, headers = false) {

        console.log("requestUrl");
        console.log(requestUrl);
        console.log(payload);
        console.log(headers);

        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload,
            headers: headers
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }

    request({ url, method, params = {}, headers, body }) {
        const config = {
            method,
            baseURL: `${this.prefix}`,
            url: params && Object.keys(params).length ? `${url}?${queryString.stringify(params)}` : `${url}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (headers) config.headers = headers;

        axios.interceptors.request.use((config) => {
            
            const auth_token = LocalStorage.get(authConstants.AUTH_TOKEN);
            // Append 'auth header' for restriction pages
            if (auth_token) {
                // Custom security header
                config.headers[ 'x-wsse' ] = auth_token;
            }

            return config;
        });

        const isPayloadMethod = !~['get', 'head', 'delete'].indexOf(method);
        // Append 'payload' for data methods
        if (isPayloadMethod) { config.data = body; }

        console.log("config");
        console.log(config);

        return axios(config)
            .then(({data}) => Promise.resolve(data))
            .catch((error) => Promise.reject(error));
    }
}

export default ClientApi;


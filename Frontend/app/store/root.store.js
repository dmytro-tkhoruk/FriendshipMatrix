'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer     from '../reducers/root.reducer';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
    return store;
}
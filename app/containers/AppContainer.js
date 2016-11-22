import React, { Component } from 'react';
import {
    AppRegistry,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from '../reducers'
import Home from '../routes/Home'
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    )
    return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})
export default AppContainer = () => {
    return (
        <Provider store={store}>
            <Home></Home>
        </Provider>
    )
}


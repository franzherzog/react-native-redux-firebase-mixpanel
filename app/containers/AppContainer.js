import React from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import trackingMiddleware from '../middleware/tracking'

import reducer from '../reducers'
import ConfigureApp from './ConfigureContainer'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })


function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            trackingMiddleware,  // tracking middleware for mixpanel
        ),
    )
    return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})
export default AppContainer = () => {
    return (
        <Provider store={store}>
            <ConfigureApp></ConfigureApp>
        </Provider>
    )
}


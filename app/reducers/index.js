import { combineReducers } from 'redux'
import * as todoReducers from './todo'
import * as routeReducers from './routes'

export default combineReducers(Object.assign({},
    todoReducers,
    routeReducers,
))
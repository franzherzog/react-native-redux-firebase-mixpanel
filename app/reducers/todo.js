import * as types from '../actions/types'

const initialState = {
    inSync: false,
    todos: []
}
// if local modification out of sync with databse
// creates an local id and adds newtodo to list
function appendNewTodo(todos, newTodo) {
    let newTodos = Object.assign({}, todos)
    const localId = new Date().getTime()
    newTodos[localId] = newTodo
    return newTodos
}
export function todo(state = initialState, action) {
    switch (action.type) {
        // action called but no feedback from server
        case types.ADD_TODO_SYNC:
            return {
                inSync: false,
                //comment in if offline or you wont wait for external db
                //todos: appendNewTodo(state.todos, action.newTodo)
                todos: state.todos
            }
        // now we are in sync with database and render the "real"list
        case types.ADD_TODO:
            return {
                inSync: true,
                todos: action.todos
            }
        // update from database in progress
        case types.UPDATE_TODO_SYNC:
            return {
                inSync: false,
                todos: state.todos
            }
        // update successfull
        case types.UPDATE_TODO:
            return {
                inSync: true,
                todos: action.todos
            }

        default:
            return state
    }
}
import * as types from './types'

export function addTodo(newTodo) {
    return {
        type: types.ADD_TODO,
        newTodo
    }
}
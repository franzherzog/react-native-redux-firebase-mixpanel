import * as types from '../actions/types'

const initialState = 0
export function addTodo(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return state + 1
    }
    return state
}
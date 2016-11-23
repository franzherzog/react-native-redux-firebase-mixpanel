import { ActionConst } from 'react-native-router-flux'

const initialState = {
    scene: {}
}

export function route(state = initialState, action = {}) {
    switch (action.type) {
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene
            }
        default:
            return state
    }
}
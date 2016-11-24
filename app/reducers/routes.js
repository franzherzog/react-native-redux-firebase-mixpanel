import { ActionConst } from 'react-native-router-flux'

const initialState = {
    scene: {}
}

export function route(state = initialState, action = {}) {
    switch (action.type) {
        // make route infos available on state
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene
            }
        default:
            return state
    }
}
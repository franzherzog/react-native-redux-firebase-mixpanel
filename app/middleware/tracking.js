import * as types from '../actions/types'
import { ActionConst } from 'react-native-router-flux'
import Mixpanel from 'react-native-mixpanel'

Mixpanel.sharedInstanceWithToken('e5e584179f2b460ca336c46f879413a1')

export default function trackingMiddleware(store) {
    return function (nextDispatch) {
        return function (action) {
            // track page change with flux router action
            if (action.type === ActionConst.FOCUS && action.scene && action.scene.sceneKey) {
                Mixpanel.track('Page loaded ' + action.scene.sceneKey)
            }
            // track user actions if available
            if (action.track && typeof (action.track) === 'string') {
                Mixpanel.track(action.track)
            }
            return nextDispatch(action);
        }
    }
}
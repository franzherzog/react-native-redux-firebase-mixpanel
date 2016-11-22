import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Mixpanel from 'react-native-mixpanel'

import Home from '../routes/Home'
import Settings from '../routes/Settings'

const RouterWithRedux = connect()(Router)

const configureApp = (DeviceInfo) => {
    Mixpanel.sharedInstanceWithToken('e5e584179f2b460ca336c46f879413a1')
    Mixpanel.track("App Loaded")
}

class ConfigureApp extends Component {
    componentDidMount() {
        configureApp()
    }
    render() {
        return (
            <RouterWithRedux>
                <Scene key="root">
                    <Scene key="home" component={Home} title="Home" initial={true}></Scene>
                    <Scene key="settings" component={Settings} title="Settings"></Scene>
                </Scene>
            </RouterWithRedux>
        )
    }
}
export default ReduxRouter = () => {
    return (<ConfigureApp />)
}
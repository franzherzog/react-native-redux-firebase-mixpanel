import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Home from '../routes/Home'
import Settings from '../routes/Settings'

const RouterWithRedux = connect()(Router)

export default ReduxRouter = () => {
    return (
        <RouterWithRedux>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true}></Scene>
                <Scene key="settings" component={Settings} title="Settings"></Scene>
            </Scene>
        </RouterWithRedux>
    )
}
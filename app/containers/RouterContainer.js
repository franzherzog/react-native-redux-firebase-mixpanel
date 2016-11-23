import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Home from '../routes/Home'
import Settings from '../routes/Settings'
import Firebase from '../routes/Todo'

const RouterWithRedux = connect()(Router)

export default ReduxRouter = () => {
    return (
        <RouterWithRedux>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={false}></Scene>
                <Scene key="settings" component={Settings} title="Settings"></Scene>
                <Scene key="firebase" component={Firebase} title="firebase" initial={true} ></Scene>
            </Scene>
        </RouterWithRedux>
    )
}
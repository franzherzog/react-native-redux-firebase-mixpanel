import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'

import RouterApp from './RouterContainer'



class ConfigureApp extends Component {
    constructor(props) {
        super(props)
        // maybe configure app here
    }
    render() {
        return (<RouterApp></RouterApp>)
    }
}

const mapDispatchProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch)
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(ConfigureApp)
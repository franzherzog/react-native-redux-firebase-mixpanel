import React, { Component } from 'react'
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View
} from 'react-native'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
class mobidemo extends Component {
    constructor(props) {
        super(props)
        this.updateState = this.updateState.bind(this)
        this.updateRoute = this.updateRoute.bind(this)
    }
    updateState() {
        this.props.addTodo()
    }
    updateRoute() {
        Actions.firebase()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Settingspage</Text>
                <TouchableHighlight onPress={this.updateState}>
                    <Text>Update State</Text>
                </TouchableHighlight>
                <Text>State Value = {this.props.todoState}</Text>
                <TouchableHighlight onPress={this.updateRoute}>
                    <Text>update route</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})

const mapDispatchProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch)
}
const mapStateToProps = (state, ownProps) => {
    return {
        todoState: state.addTodo
    }
}
export default connect(mapStateToProps, mapDispatchProps)(mobidemo)
// export default connect(()=>{return {}}, mapDispatchProps)(mobidemo)
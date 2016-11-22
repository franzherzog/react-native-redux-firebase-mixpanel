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

class mobidemo extends Component {
    constructor(props) {
        super(props)
        this.updateState = this.updateState.bind(this)
    }
    updateState() {
        this.props.addTodo()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
        </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
        </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
        </Text>
                <TouchableHighlight onPress={this.updateState}>
                    <Text>Update State</Text>
                </TouchableHighlight>
                <Text>State Value = {this.props.todoState}</Text>
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
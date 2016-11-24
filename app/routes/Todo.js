import {
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

class FirebaseTest extends Component {
    constructor(props) {
        super(props)
        this.addText = this.addText.bind(this)
    }
    componentDidMount() {
        this.props.updateTodos() // once
        // this.props.listenTodos() // subscribe todofh
    }
    addText(text) {
        this.props.addTodo(text)
    }
    render() {
        const {todos, inSync} = this.props
        const list = []
        const loading = inSync || <Text>...loading</Text>

        for (todo in todos) {
            list.push(<Text key={todo}>{todos[todo]}</Text>)
        }
        // newest on top
        list.reverse()
        return (
            <View style={{ margin: 70 }}>
                <Text>Todos</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.addText('new Todoist')}>
                    <Text>add new Todo</Text>
                </TouchableOpacity>
                <View>
                    {loading}
                    {list}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'grey',
        margin: 20,
        padding: 5,
        width: 70,

    },
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
        todos: state.todo.todos,
        inSync: state.todo.inSync
    }
}
export default connect(mapStateToProps, mapDispatchProps)(FirebaseTest)
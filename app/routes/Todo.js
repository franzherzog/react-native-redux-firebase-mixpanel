import {
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, { Component } from 'react'
import * as firebase from 'firebase'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

const config = {
    apiKey: "AIzaSyCYBBHExOFLthObpYiWqgW8g5B7ENAO5h0",
    authDomain: "storage-4b40e.firebaseapp.com",
    databaseURL: "https://storage-4b40e.firebaseio.com",
    storageBucket: "storage-4b40e.appspot.com",
    messagingSenderId: "131391384047"
};

const firebaseApp = firebase.initializeApp(config)

class FirebaseTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: ['']
        }
        this.itemsRef = firebaseApp.database().ref();
        this.addText = this.addText.bind(this)
    }
    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
            // get children as an array
            var items = [];
            snap.forEach((child) => {
                items.push({
                    title: child.val().text,
                    _key: child.key
                });
            });
        });
    }
    componentDidMount() {
        this.listenForItems(this.itemsRef)
    }
    addText(text) {
        this.itemsRef.push({ text })
    }
    render() {
        //render list
        const data = this.state.dataSource.map((data, i) => {
            return (<Text key={i}>{data.title}</Text>)
        })
        return (
            <View style={{ marginTop: 50 }}>
                <Text>Todos</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.addText('krkrk')}>
                    <Text>add</Text>
                    {data}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'grey',
        width: 40
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
        todoState: state.addTodo
    }
}
export default connect(mapStateToProps, mapDispatchProps)(FirebaseTest)
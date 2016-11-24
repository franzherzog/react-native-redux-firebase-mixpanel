import * as types from './types'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCYBBHExOFLthObpYiWqgW8g5B7ENAO5h0",
    authDomain: "storage-4b40e.firebaseapp.com",
    databaseURL: "https://storage-4b40e.firebaseio.com",
    storageBucket: "storage-4b40e.appspot.com",
    messagingSenderId: "131391384047"
};

const firebaseApp = firebase.initializeApp(config)
const todoRef = firebaseApp.database().ref()


function waitForAddTodo(newTodo) {
    return {
        inSync: false,
        type: types.ADD_TODO_SYNC,
        newTodo,
    }
}
function addTodo(newTodo) {
    return {
        inSync: true,
        type: types.ADD_TODO,
        newTodo,
        track: 'useraction todo added' + newTodo
    }
}
function waitForUpdate() {
    return {
        inSync: false,
        type: types.UPDATE_TODO_SYNC,
    }
}
function update(todos) {
    return {
        inSync: true,
        type: types.UPDATE_TODO,
        todos,
        track: 'useraction todo updated'
    }
}
export function addTodo(newTodo, listenForChange) {
    return function (dispatch) {
        dispatch(waitForAddTodo(newTodo))
        const listen = todoRef.push(newTodo, (error) => {
            // if (listenForChange) {
            //     subscribe(listen, todoRef)
            // }
            // else {
            //     // remove listener
            //     listen()
            // }
            dispatch(updateTodos())
        })
    }
}
export function updateTodos() {
    return (dispatch) => {
        dispatch(waitForUpdate())
        const listen = todoRef.once('value', (snap) => {
            dispatch(update(snap.val()))
        });
    }
}
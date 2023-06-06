import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import axios from 'axios'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
    profile: [],
    repos:  []
}

export function getProfile() {
    return (dispatch) => {axios.get("https://api.github.com/users/josuem65").then((resp) => {
        dispatch({
            type: 'GET_PROFILE',
            payload: resp.data
        })
    })}
}

export function getRepos() {
    return (dispatch) => {
        axios.get("https://api.github.com/users/Josuem65/repos").then((resp) => {
            console.log(resp.data)
            dispatch({
                type: 'GET_REPOS',
                payload: resp.data
            })
        })
    }
}

function repoReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_PROFILE':
            return {...state, profile: action.payload};
        case 'GET_REPOS':
            return {...state, repos: action.payload};
        default:
            return {...state}
    }
}

export default createStore(repoReducer, compose(applyMiddleware(thunk), composeWithDevTools()))
import React from 'react'
import { produce } from 'immer'
import createReducer from './reducerUtil'


const inisualState = {
    history:[]
}

const history = {
    getAllHistory(state, action) {
        state.history = action.payload;
    },
    setOneHistory(state, action) {
        state.history.push(action.payload) ;
    },
    removeAllHistory(state, action) {
        state.history=[] ;
    }
}

export default produce((state, action) => createReducer(state, action, history), inisualState)
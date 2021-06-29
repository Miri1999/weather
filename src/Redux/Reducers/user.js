import React from 'react'
import { produce } from 'immer'
import createReducer from './reducerUtil'


const inisualState = {
    user: { _id: null, name: null, mail: null }
}

const users = {
    signIn(state, action) {
        state.user = action.payload;
    },
    signUp(state, action) {
        state.user = action.payload;
    },

    signOutUser(state, action) {
        state.user = { id: null, name: null, mail: null };
    },
}

export default produce((state, action) => createReducer(state, action, users), inisualState)
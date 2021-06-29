import React from 'react'
import { produce } from 'immer'
import createReducer from './reducerUtil'


const inisualState = {
    weather: {
        date: null,
        city: null,
        description: null,
        temp: null,
        minTemp: null,
        maxTemp: null,
        icon: null
    }
}

const weather = {
    getWeather(state, action) {
        state.weather = action.payload;
    },

}

export default produce((state, action) => createReducer(state, action, weather), inisualState)
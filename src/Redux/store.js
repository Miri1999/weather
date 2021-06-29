import Reac from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import weatherReducer from './Reducers/weather';
import { ServiceUser } from './Middelwares/serviceUser';
import { ServiceWeather } from './Middelwares/serviceWeather';
import { ServiceHistory } from './Middelwares/serviceHistory';
// import citiesReducer from './Reducers/cities';
import userReducer from './Reducers/user';
const reducer = combineReducers({ userReducer, weatherReducer });
// const store = createStore(reducer, applyMiddleware(ServiceWeather));

const store = createStore(reducer, applyMiddleware(ServiceUser, ServiceWeather, ServiceHistory));

window.store = store;
export default store;





import { actions } from "../actions";
import kelvinToCelsius from 'kelvin-to-celsius'
import axios from "axios"

export const ServiceWeather = ({ dispatch, getState }) => next => action => {
    if (action.type === "GET_WEATHER") {
        const apiKey = "656628c4bdc296f6f5c231d2c940a647";//my apiKey
        const city = action.payload
        console.log("im at middlware!!!!!!!");
        console.log(getState);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
            { method: 'GET' }).then(res => res.json()).then(data => {
                console.log(data)
                const weather = {
                    date: new Date().toLocaleDateString(),
                    // date: new Date(Date.now()),
                    city: city,
                    description: data.weather[0].description,
                    temp: kelvinToCelsius(data.main.temp),
                    minTemp: kelvinToCelsius(data.main.temp_min),
                    maxTemp: kelvinToCelsius(data.main.temp_max),
                    icon: data.weather[0].icon
                }
                // console.log(weather)
                action.payload = weather
                
                return next(action)
            })


    } else { return next(action) }



}
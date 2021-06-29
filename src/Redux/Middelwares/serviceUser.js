import { actions } from "../actions";
import axios from "axios"

export const ServiceUser = ({ dispatch, getState }) => next => action => {
    if (action.type === "SIGN_IN") {
        return new Promise((resolve, reject) => {
            console.log("im at login middelware")
            axios.post("http://localhost:8080/login", action.payload)
                .then((res) => {
                    console.log("res")
                    console.log(res)
                    let user = { ...res.data.user }
                    action.payload = user
                    if (user._id != null) {
                        resolve(true)
                        return next(action)
                    }
                    else
                        resolve(false)

                }
                ).catch(error => {
                    // if (error.response?.status ==409) {
                    //     // Request made and server responded
                    //     console.log(error.response.data);
                    //     console.log(error.response.status);
                    //     console.log(error.response.headers);
                    // } else if (error.request) {
                    //     // The request was made but no response was received
                    //     console.log(error.request);
                    // } else {
                    //     // Something happened in setting up the request that triggered an Error
                    //     console.log('Error', error.message);
                    // }
                    reject(error)
                })



        })

    }



    if (action.type === "SIGN_UP") {
        return new Promise((resolve, reject) => {
            console.log("im at createUser middelware")
            axios.post("http://localhost:8080/createUser", action.payload)
                .then(res => {
                    debugger
                    console.log("res")
                    console.log(res)
                    let user = { ...res.data.user }
                    action.payload = user
                    if (user._id != null) {
                        resolve(true)
                        return next(action)
                    }
                    else
                        resolve(false)

                }).catch(err => {
                    // debugger
                    console.log("at service catch");
                    console.log("err.catch");
                    reject(err)
                })



        })
        // let myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

    }

    next(action)

}
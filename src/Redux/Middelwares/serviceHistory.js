import { actions } from "../actions";
import axios from "axios"

export const ServiceHistory = ({ dispatch, getState }) => next => action => {
    console.log("at ServiceHistory");
    if (action.type === "GET_ALL_HISTORY") {
        // return new Promise((resolve, reject) => {
        console.log("im at GET_ALL_HISTORY middelware")
        console.log(getState().userReducer.user._id);
        axios.get("http://localhost:8080/getUserHistories/" + getState().userReducer.user._id)
            .then((res) => {
                console.log("res")
                console.log(res)
                let history = { ...res.data.histories }
                action.payload = history
                if (history._id != null) {
                    return next(action)
                }


            }
            ).catch(error => {
                // if (error.response?.status ==409) {
                //     // Request made and server responded
                //     console.log(error.response.data);
                //     console.log(error.response.status);
                //     console.log(error.response.headers);
                // } else if (error.request) {
                //     // The request was made but no response was received
                console.log(error);
                // } else {
                //     // Something happened in setting up the request that triggered an Error
                //     console.log('Error', error.message);
                // }
            })



        // })

    }



    if (action.type === "SET_ONE_HISTORY") {
        return new Promise((resolve, reject) => {

            axios.post("http://localhost:8080/createNewHistory", action.payload)
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
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/actions';
// import cities from '../Redux/Reducers/cities';
import Form from 'react-bootstrap/Form'
import '../style.css'

const mapDispatchToProps = (dispatch) => ({

    getWeather: (prod) => dispatch(actions.getWeather(prod))
})
function mapStateToProps(state) {
    return {
        weather: state.weatherReducer.weather
        // history: state.productsCartsReducer.productsCart
    }
}



function TheWeather(props) {
    const { getWeather, weather } = props
    const [isSelected, setIsSelected] = useState(false)
    const cities = ["bnei brak", "tel aviv", "jerusalem", "Bat Yam", "Ashkelon", "Dimona", "Elat", "Hadera"]



    function getCityWeather(city) {
        getWeather(city)
        setIsSelected(true)
    }
    return (
        <>
            <h3>TheWeather page</h3>
            <select onChange={(e) => { getCityWeather(e.target.value) }} style={{ "width": "660px", "marginLeft": " auto", "marginRight": " auto" }} className="form-control ">
                <option defaultValue disabled={isSelected ? true : false} >choose a city</option>
                {cities.map(city => {
                    return <option key={city} value={city}>{city}</option>
                })}
            </select>

            {/* {isSelected && console.log(weather)} */}
            {isSelected && weather &&
                < div className="weather">
                    <table>
                        <tbody>
                            {Object.keys(weather).map(key => {
                                return (
                                    <tr key={key}>
                                        <td>{key}:</td>
                                        <td>{weather[key]}</td>
                                        <td><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
                                            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                                        </svg></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            }
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TheWeather)
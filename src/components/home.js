import React, { useEffect, useState } from 'react';
import { actions } from '../Redux/actions'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { Login } from './login'
import { Register } from './register'
import { connect } from 'react-redux';
// import userReduser from '../Redux/Reducers/user'

const mapDispatchToProps = (dispatch) => ({

    signIn: (user) => dispatch(actions.signIn(user)),
    signUp: (user) => dispatch(actions.signUp(user)),
    getAllHistory: () => dispatch(actions.getAllHistory())

})


function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(
    function HomePage(props) {
        const { signIn, user, signUp, getAllHistory } = props
        const [showLogin, setShowLogin] = useState(false)
        const [showRegister, setShowRegister] = useState(false)
        // setInterval(() => { console.log(user) }, 2000)
        useEffect(() => {
            getAllHistory()
        }, [])
        return (
            <>
                {console.log(user)}
                {JSON.stringify(user)}
                <h3>Home Page</h3>

                <Login signIn={signIn} user={user} show={showLogin} setShow={setShowLogin}></Login>
                <Register show={showRegister} setShow={setShowRegister} signUp={signUp}></Register>

                <Button variant="info" onClick={() => { setShowLogin(true) }}>
                    Login        </Button>

                <Button variant="info" onClick={() => { setShowRegister(true) }}>
                    Register
                </Button>
                {/* <Link to="/login">Login</Link> */}
                {/* <Link to="/register">Register</Link> */}
            </>
        )
    })
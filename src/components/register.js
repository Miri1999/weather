import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useHistory } from "react-router-dom";



export function Register(props) {
    const { show, setShow, signUp } = props
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [mail, setMail] = useState();
    const [sendNotSuccses, setSendNotSuccses] = useState(false)
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function toRejister() {
        let myUser = { name, mail, password }
        signUp(myUser).then((succses) => {
            console.log(succses)
            if (succses) {
                handleClose(false)
                history.push("/weather")
            }
            else
                setSendNotSuccses(true)
        }).catch(error => {
            console.log("at --register-- err.response");
            if (error.response?.status === 409) {
                setSendNotSuccses(true)
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                {/* <form id="myForm"> */}
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="container">
                        <div className="row">
                            <label htmlFor="inputName">Name:</label>
                            <input id="inputName" onChange={(e) => setName(e.target.value)} className="form-control" type="text" placeholder="Enter Your Name"></input></div>
                        <div className="row pt-3">
                            <label htmlFor="inputMail">Mail:</label>
                            <input id="inputMail" onChange={(e) => setMail(e.target.value)} className="form-control" type="email"></input></div>
                        <div className="row pt-3">
                            <label htmlFor="inputPassworde">Password:</label>
                            <input id="inputPassworde" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} ></input></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="alert alert-danger mt-4" hidden={!sendNotSuccses}>userName already exist in system</div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={toRejister}>
                        send
                    </Button>
                    {/* <input type="submit" className="btn btn-info"> send </input> */}
                </Modal.Footer>
                {/* </form> */}
            </Modal>
        </>
    );
}


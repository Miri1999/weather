import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";




export function Login(props) {
    const history = useHistory();
    const { show, setShow, signIn, user } = props
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [sendNotSuccses, setSendNotSuccses] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function toLogin() {
        let myUser = { name, password }
        signIn(myUser).then((succses) => {
            console.log(succses)
            if (succses) {
                handleClose(false)
                history.push("/weather")
            }
            else
            setSendNotSuccses(true)
        }).catch(err=>{
            setSendNotSuccses(true)

        })

        // if (user.)
        // alert("yey!!!")
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
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <label htmlFor="inputName">Name:</label>
                            <input id="inputName" onChange={(e) => setName(e.target.value)} className="form-control" type="text" placeholder="Enter Your Name"></input></div>
                        <div className="row pt-3">
                            <label htmlFor="inputPassworde">Password:</label>
                            <input id="inputPassworde" className="form-control" onChange={(e) => setPassword(e.target.value)} type="password"></input></div>
                            
                        <div className="alert alert-danger mt-4" hidden={!sendNotSuccses}>userName or password is not valid!</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={toLogin} >send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//   render(<Login />);
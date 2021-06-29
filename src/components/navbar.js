import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'

export default function NavbarPage() {
    return (
        <>
            <Navbar fixed="top" expand="sm" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">Weather-Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="text-info px-1"> Home </Link>
                        <Link to="/Weather" className="text-info px-5">Weather</Link>
                        <Link to="/History" className="text-info px-1"> History </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

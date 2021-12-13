import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from '../cartwidget/CartWidget'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Navbar.Brand href="#logo"> <i class="fas fa-futbol"></i> </Navbar.Brand>
                <Navbar.Brand href="#home"> SPORTS Store </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Catalog</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                        {/* CARTWIDGET */}
                        <Nav.Link href="#CartWidget"> <CartWidget /> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
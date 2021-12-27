import React from 'react'
import { Navbar, Container, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import CartWidget from '../cartwidget/CartWidget'

const NavBar = ( brandname ) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Navbar.Brand href="/"> 
                    <NavLink to="/">
                    <i class="fas fa-futbol"></i> 
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Brand href="#home"> {brandname.name} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Catalog</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/cat/mens">Men's clothing</NavDropdown.Item>
                            <NavDropdown.Item href="#/cat/jewels">Jewelery</NavDropdown.Item>
                            <NavDropdown.Item href="#/cat/electrs">Electronics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
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
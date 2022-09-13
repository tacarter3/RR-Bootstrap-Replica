import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


{/* <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="[Instacart logo src]" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar> */}

const TopBar = () => {

return (
<>
<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="https://www.instacart.com/image-server/240x48/www.instacart.com/assets/beetstrap/brand/instacart-logo-color%403x-586fdf73b07dc9ca4b2c9a57f85f82c46f35debd4fd1887227b83f68e41d4f87.png" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
            <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
            <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>

</>
)}

export default TopBar
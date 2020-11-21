import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/styles/navbarStyle.css'


export default function NavBar() {
    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" position="sticky-top">
          <Navbar.Brand id="logo" href="#home">Rosmalina Abrell</Navbar.Brand>
          <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="navlink">
+             <Nav.Link id="nav" href="#home">home</Nav.Link>
              <Nav.Link id="nav" href="#about">about</Nav.Link>
              <Nav.Link id="nav" eventKey={2} href="#CV">
                CV
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}




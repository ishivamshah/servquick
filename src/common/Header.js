import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Link} from 'react-router-dom'
import { CustomButton } from '../components/buttons/CustomButton';
import FeatherPhone from '../assets/images/feather-phone-call.png'
// import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  return (
    <>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">ServQuick</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink> 
            <Link to="#"><img src={FeatherPhone} style={{width: "20px", marginRight: "5px"}}/>+1 202-918-2132</Link>    
      
            <NavLink to="/login">Login</NavLink>
            <Link className="try" to="#">Try ServQuick<br />Free for 14 Days </Link> 
            <CustomButton label="Sign Up"/>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header () {
  return (
    <Navbar className="naaaav"
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'
    >
      <Navbar.Brand className='nav-title' href='/'>
        TOVE ADAMSSON
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/projects'>Projects</Nav.Link>
          <Nav.Link href='/contact'>Connect with me</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  )
}

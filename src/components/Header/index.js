import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import { connect } from 'react-redux';
import {signout} from '../../redux/actions'

const Header = (props) => {
  const authState = useSelector(state => state.authState)
  
  const logOut = (e) => {
    e.preventDefault();
    props.signout()
  }
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick = {logOut}>
            SignOut
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">SignIn</Nav.Link> */}
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            SignUp
          </NavLink>
        </li>
      </Nav>
    )
  }
  return (
    <Navbar
      collapseOnSelect
      fixed = "top"
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
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
          {
            authState.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect(null, { signout })(Header);

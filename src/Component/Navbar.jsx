import { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixLogo from "../assets/netflix_logo.png";
import Avatar from "../assets/avatar.png"
import "../styles.css";
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
import {withRouter, Link} from 'react-router-dom'

class CustomNavbar extends Component {
  render() {
    return (
      
      <Navbar collapseOnSelect expand="lg">
        {/* <Container > */}
        <Link to='/'>
        <Navbar.Brand>

          <img src={NetflixLogo} id="logo" />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Tv Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My list</Nav.Link>
          </Nav>
          <Nav id="interaction">
          <AiOutlineSearch/>
          <Nav.Link className='nav-link-c'>KIDS</Nav.Link>
          <IoIosNotifications/>
          <NavDropdown title={<img src={Avatar} id='avatar'/>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}

export default withRouter(CustomNavbar);

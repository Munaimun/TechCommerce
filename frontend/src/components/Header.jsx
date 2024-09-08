import { Navbar, Nav, Container } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import { FaShoppingCart, FaUser } from "react-icons/fa";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="techShop" className="logo" />
              echCommerce
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="text-white">
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link className="text-white">
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

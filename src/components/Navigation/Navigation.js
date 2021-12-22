import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../../helpers/routes";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={routes.home}>
            Spanish Trainer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={routes.quizzes}>
                Quizzes
              </Nav.Link>
              <NavDropdown title="Admin">
                <NavDropdown.Item as={NavLink} to={routes.admin.users}>
                  Users
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to={routes.login}>
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.register}>
                Sign Up
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.account}>
                My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

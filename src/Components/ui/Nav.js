import React from "react";
import "../style.css"
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;

  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tmp/communityoflove2022.com/">Home</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#cafe">Gods Gospel Cafe</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#coming-soon">Community Services</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#courses">Online Language Courses</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#quick-links">Give/Partner</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#quick-links">Prayer Request</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

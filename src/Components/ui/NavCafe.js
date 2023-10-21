import React from "react";
import "../style.css";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar2 = NavStyle.navBar2;

  return (
    <>
      <Navbar className={navBar2} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tmp/communityoflove2022.com/">Home</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#our-story">
                Our Story
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#board">
                Board of Directors
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#">
                Faith & Action
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

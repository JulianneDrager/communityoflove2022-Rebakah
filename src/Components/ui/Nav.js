import React from "react";
import "../style.css";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import HeaderStyle from "../Community of Love/Header/css/Header.module.css";
import NavStyle from "./Nav.module.css";
import { useMediaQuery } from "@mui/material";

const Navigation = () => {
  const navBar = NavStyle.navBar;
  const headerInfoWrapper = HeaderStyle.headerInfoWrapper;
  const iconText = HeaderStyle.iconText;
  const contactIconWrapper = HeaderStyle.contactIconWrapper;
  const socialIconStyle = HeaderStyle.socialIconStyle;
  const socialMediaWrapper = HeaderStyle.socialMediaWrapper;
  const matchesLg = useMediaQuery("(min-width:765px)");

  const headerInfo = (
    <>
      <div className={contactIconWrapper}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={iconText}>PH: 123-456-7890 HRS: 8AM-8PM</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={iconText}>EM: CommunityOfLove70@gmail.com</div>
        </div>
      </div>
    </>
  );

  const socialMediaSection = (
    <>
      <div className={socialMediaWrapper}>
        <a style={{ color: "#a98519" }} href="/" className={socialIconStyle}>
          FACEBOOK
        </a>
        <a style={{ color: "#a98519" }} href="/" className={socialIconStyle}>
          INSTAGRAM
        </a>
        <a style={{ color: "#a98519" }} href="/" className={socialIconStyle}>
          LINKEDIN
        </a>
      </div>
    </>
  );

  return (
    <>
      <Navbar className={navBar} expand="lg">
        {!matchesLg && (
          <div className={headerInfoWrapper}>
            {headerInfo}
            {socialMediaSection}
          </div>
        )}
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tmp/communityoflove2022.com/">Home</Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#cafe">
                God's Gospel Cafe
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#coming-soon">
                Family Services
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#courses">
                Foreign Language Online Courses
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#quick-links">
                Give/Partner
              </Nav.Link>
              <Nav.Link href="/tmp/communityoflove2022.com/#quick-links">
                Request Prayer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

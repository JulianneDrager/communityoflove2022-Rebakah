import React from "react";
import "../style.css";
import { Navbar } from "react-bootstrap";
import HeaderStyle from "../Community of Love/Header/css/Header.module.css";
import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;
  const headerInfoWrapper = HeaderStyle.headerInfoWrapper;
  const iconText = HeaderStyle.iconText;
  const contactIconWrapper = HeaderStyle.contactIconWrapper;

  const headerInfo = (
    <>
      <div className={contactIconWrapper}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={iconText}>PH: 123-456-7890 HRS: 8AM-8PM | </div>
          <div className={iconText}>EM: CommunityOfLove70@gmail.com</div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navbar className={navBar} expand="lg">
        <div className={headerInfoWrapper}>{headerInfo}</div>
      </Navbar>
    </>
  );
};
export default Navigation;

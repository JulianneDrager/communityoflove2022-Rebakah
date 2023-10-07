import React from "react";
import HeaderStyle from "./Header.module.css";
import { Image, Col, Row, Button } from "react-bootstrap";
import Gallery from "./Gallery"; //mobile
import DesktopHeader from "./DesktopHeader";
import useMediaQuery from "../UseMediaQuery";
import Logo from "../../images/communityoflovelogo.png";

const Header = () => {
  const matchesLg = useMediaQuery("(max-width: 765px)");
  const header = HeaderStyle.header;
  const LogoStyle = HeaderStyle.LogoStyle;
  const titleH1Mobile = HeaderStyle.titleH1Mobile;
  const btnMobile = HeaderStyle.btnMobile;
  const logoWrapper = HeaderStyle.logoWrapper;
  const slash = <span style={{ color: "#c3c3c3" }}>|</span>;

  const headerNav = (
    <Col>
      <Button
        href="/tmp/communityoflove2022.com/#cafe"
        style={{ width: "127px" }}
        className={btnMobile}
      >
        {slash} GOD'S GOSPEL CAFE {slash}
      </Button>
      <Button
        href="/tmp/communityoflove2022.com/#coming-soon"
        style={{ width: "97px" }}
        className={btnMobile}
      >
        COMING SOON {slash}
      </Button>
      <Button
        href="/tmp/communityoflove2022.com/#courses"
        style={{ width: "101px" }}
        className={btnMobile}
      >
        LANGUAGE COURSES
      </Button>
      <Button
        href="/tmp/communityoflove2022.com/#quick-links"
        style={{ width: "32px" }}
        className={btnMobile}
      >
        {slash} GIVE
      </Button>
      <Button
        href="/tmp/communityoflove2022.com/#quick-links"
        style={{ width: "116px" }}
        className={btnMobile}
      >
        {slash} REQUEST PRAYER {slash}
      </Button>
    </Col>
  );

  return (
    <>
      {matchesLg && (
        <>
          <div id="header" className={header}>
            <div className={logoWrapper}>
              <Image src={Logo} className={LogoStyle} />
            </div>
           
            <h1 className={titleH1Mobile}>
              Community <br /> <b style={{ color: "#ad1f37" }}>of Love</b>
            </h1>
          </div>

          <div style={{ marginTop: "-7rem" }}>{matchesLg && <Gallery />}</div>
        </>
      )}
      {!matchesLg && <DesktopHeader />}
    </>
  );
};
export default Header;

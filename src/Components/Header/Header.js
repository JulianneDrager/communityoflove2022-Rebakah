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
  const logoWrapper = HeaderStyle.logoWrapper;

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
          {/* mobile view */}
          <div style={{ marginTop: "-7rem" }}>{matchesLg && <Gallery />}</div>
        </>
        // desktop view
      )}
      {!matchesLg && <DesktopHeader />}
    </>
  );
};
export default Header;

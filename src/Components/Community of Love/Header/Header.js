import React from "react";
import HeaderStyle from "./css/Header.module.css";
import { Image } from "react-bootstrap";
import Gallery from "./Moble Slides/Gallery"; //mobile
import DesktopHeader from "./DesktopHeader";
import useMediaQuery from "../../UseMediaQuery";
import Logo from "../../../images/communityoflovelogo.png";

const Header = () => {
  const matchedSm = useMediaQuery("(max-width: 765px)");
  const header = HeaderStyle.header;
  const LogoStyle = HeaderStyle.LogoStyle;
  const titleH1Mobile = HeaderStyle.titleH1Mobile;
  const logoWrapper = HeaderStyle.logoWrapper;

  return (
    <>
      {matchedSm && (
        <>
          {/* logo and Title  */}
          <div id="header" className={header}>
            <div className={logoWrapper}>
              <Image src={Logo} className={LogoStyle} />
            </div>

            <h1 className={titleH1Mobile}>
              Community <br />
              <b style={{ color: "#ad1f37" }}>of Love</b>
            </h1>
          </div>

          {/* mobile view */}
          <div style={{ marginTop: "-7rem" }}>
            <Gallery />
          </div>
        </>
      )}

      {/* desktop view  */}
      {!matchedSm && <DesktopHeader />}
    </>
  );
};
export default Header;

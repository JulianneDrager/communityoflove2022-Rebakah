import React from "react";
import HeaderStyle from "./css/Header.module.css";
import { Image } from "react-bootstrap";
import Gallery from "./Moble Slides/Gallery"; //mobile
import DesktopHeader from "./DesktopHeader";
import useMediaQuery from "../../UseMediaQuery";
import Logo from "../../../images/communityoflovelogo.png";
// import clearLine from "../../../images/mobile-header/clear-line.png";


const Header = () => {
  const matchedSm = useMediaQuery("(max-width: 766px)");
  const matchedmW568 = useMediaQuery("(min-width: 568px)");

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
              Community 
              { !matchedmW568 && <br />}
              <b style={{ color: "#ad1f37" }}> of Love</b>
            </h1>
          </div>

          {/* mobile view */}
          <div style={{ marginTop: "-7rem" }}>
            <Gallery />
            {/* <Image src={clearLine}  style={{backgroundColor:"pink"}}/> */}
          </div>
        </>
      )}

      {/* desktop view  */}
      {!matchedSm && <DesktopHeader />}
    </>
  );
};
export default Header;

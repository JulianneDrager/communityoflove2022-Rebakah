import React from "react";
import { Image, Button } from "react-bootstrap";
import HeaderStyle from "./css/Header.module.css";
// Image imports
import BackgroundImage from "../../../ggcf-images/mobile-header/mobile-header-background.jpg";
import LogoImage from "../../../ggcf-images/mobile-header/mobile-logo.png";
import ContentImage from "../../../ggcf-images/mobile-header/mobile-header-content.png";

const MobileHeader = () => {

    const WrapperStyle = HeaderStyle.wrapper;
    const ContentWrapperStyle = HeaderStyle.contentWrapper;
    const BackgroundImageStyle = HeaderStyle.backgroundImage;
    const LogoImageStyle = HeaderStyle.logoImage;
    const H2Style = HeaderStyle.h2Style;
    const MiniWrapperStyle = HeaderStyle.miniWrapper;
    const ContentImageStyle = HeaderStyle.contentImage;
    const DividerStyle = HeaderStyle.divider;
    const ButtonStyle = HeaderStyle.button;

    return (
        <>
            <main id="wrapper" className={WrapperStyle}>
                {/* Background Image */}
                <Image src={BackgroundImage} className={BackgroundImageStyle} />

                <div id="contentWrapper" className={ContentWrapperStyle}>
                    {/* Logo */}
                    <Image src={LogoImage} className={LogoImageStyle} />
                    <div className={MiniWrapperStyle}>
                        <h2 className={H2Style}>A Place Where</h2>
                        {/* "Coffee, Tea, Gospel" Title Image */}
                        <Image src={ContentImage} className={ContentImageStyle} />
                    </div>
                    <div className={MiniWrapperStyle}>
                        <h2 className={H2Style}>Contact Us</h2>
                        {/* divider */}
                        <div className={DividerStyle}></div>
                        <h2 className={H2Style}>347.461.5185</h2>
                    </div>
                    {/* "Learn More" button */}
                    <Button className={ButtonStyle}>Learn More</Button>
                </div>
            </main>
        </>
    )
}

export default MobileHeader;
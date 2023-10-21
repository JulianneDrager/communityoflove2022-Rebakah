import React from "react";
import { Image, Button } from "react-bootstrap";
import HeaderStyle from "./css/Header.module.css";

import BackgroundImage from "../../../ggcf-images/desktop-header/desktop-background-header.png";
import LogoImage from "../../../ggcf-images/desktop-header/desktop-logo.png";
import ContentImage from "../../../ggcf-images/desktop-header/desktop-header-content.png";

const DesktopHeader = () => {

    const WrapperStyle = HeaderStyle.wrapper;
    const BackgroundImageStyle = HeaderStyle.backgroundImage;
    const ContentWrapperStyle = HeaderStyle.contentWrapper;
    const LogoImageStyle = HeaderStyle.logoImage;
    const H2Style = HeaderStyle.h2Style;
    const ContentImageStyle = HeaderStyle.contentImage;
    const MiniWrapperStyle = HeaderStyle.miniWrapper;
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

export default DesktopHeader;
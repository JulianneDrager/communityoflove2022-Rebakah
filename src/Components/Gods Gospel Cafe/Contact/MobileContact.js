import React from "react";
import { Image } from "react-bootstrap";
import ContactStyle from "./css/Contact.module.css";
// Image imports
// import BackgroundImage from "../../../images/";

const MobileContact = () => {

    const WrapperStyle = ContactStyle.wrapper;
    const BackgroundImageStyle = ContactStyle.backgroundImage;
    const PlaceholderBackgroundStyle = ContactStyle.placeholderBackground;
    const ContentWrapperStyle = ContactStyle.contentWrapper;
    const H1Style = ContactStyle.h1Style;
    const InfoWrapperStyle = ContactStyle.infoWrapper;
    const WebLinkStyle = ContactStyle.webLink;

    return (
        <>
            < main id="wrapper" className={WrapperStyle}>
                {/* Background image */}
                <Image /* src={BackgroundImage} */ className={`${BackgroundImageStyle} ${PlaceholderBackgroundStyle}`} />

                {/* Content Wrapper (blue box) */}
                <div id="contentWrapper" className={ContentWrapperStyle}>
                    {/* H1 Title: "Contact Us" */}
                    <h1 className={H1Style}>Contact <span>Us</span></h1>
                    {/* Info Wrapper (blue box) */}
                    <div id="infoWrapper" className={InfoWrapperStyle}>
                        <p>Sharon Chatman, CEO</p>
                        <p>347.461.5185</p>
                        <p>GodsGospelCafe17@gmail.com</p>
                        <br/>
                        <p>Follow us on Facebook!</p>
                        <a className={WebLinkStyle}>....facebooklinkgoeshere....</a>
                    </div>
                </div>
            </main >
        </>
    )
}

export default MobileContact;
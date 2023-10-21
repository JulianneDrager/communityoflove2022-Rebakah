import React from "react";
import useMediaQuery from "../../UseMediaQuery";
import DesktopContact from "./DesktopContact";
import MobileContact from "./MobileContact";

const Contact = () => {
    const matchedSm = useMediaQuery("(max-width: 600px)");

    return (
        <>
            {/* mobile view */}
            {matchedSm && <MobileContact/>}
            {/* desktop view  */}
            {!matchedSm && <DesktopContact />}
        </>
    )
}

export default Contact;
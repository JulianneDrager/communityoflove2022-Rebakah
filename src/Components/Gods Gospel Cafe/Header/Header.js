import React from "react";
import useMediaQuery from "../../UseMediaQuery";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./Mobileheader";

const Header = () => {
    const matchedSm = useMediaQuery("(max-width: 600px)");

    return (
        <>
            {/* mobile view */}
            {matchedSm && <MobileHeader/>}
            {/* desktop view  */}
            {!matchedSm && <DesktopHeader />}
        </>
    )
}

export default Header;
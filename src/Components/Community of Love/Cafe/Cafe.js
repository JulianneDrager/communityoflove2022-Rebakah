import React from "react";
import CafeStyle from "./Cafe.module.css";
import { Button, Image } from "react-bootstrap";
import Logo from "../../../images/mobile-cafe/gods-gospel-cafe.png";
import BibleImg from "../../../images/mobile-cafe/bible-and-cross-icon.png";
import { useMediaQuery } from "@mui/material";

const Cafe = () => {
  const logoStyle = CafeStyle.logoStyle;
  const h1Style = CafeStyle.h1Style;
  const theHeartH1Style = CafeStyle.theHeartH1Style;
  const btn = CafeStyle.btn;
  const divWrapper = CafeStyle.divWrapper;
  const listWrapper = CafeStyle.listWrapper;
  const bibleImg = CafeStyle.bibleImg;
  const leftWrapper = CafeStyle.leftWrapper;
  const rightWrapper = CafeStyle.rightWrapper;
  const matthew513 = CafeStyle.matthew513;
  const matchedSm = useMediaQuery("(max-width: 765px)");
  return (
    <>
      {/* for mobile viewport */}
      {matchedSm && (
        <div id="cafe" className={divWrapper}>
          <Image src={Logo} className={logoStyle} />
          <div style={{ textAlign: "center" }}>
            <h1 className={h1Style}>The Branch Of Zion</h1>
            <h2 className={theHeartH1Style}>What Feeds The Community</h2>
            <p className={h1Style}>Matthew 5:13</p>
            <p className={matthew513}>
              “Ye are the salt of the earth: but if the salt have lost his
              savour, wherewith shall it be salted? it is thenceforth good for
              nothing, but to be cast out, and to be trodden under foot of men.”
            </p>
          </div>
          <div className={listWrapper}>
            <p style={{ margin: "0" }}>Volunteer Network</p>
            <p style={{ margin: "0" }}>Spiritual Guidance</p>
            <p style={{ margin: "0" }}>Emotional Assistance</p>
            <p style={{ margin: "0" }}>Physical Needs</p>
          </div>
          <Image className={bibleImg} src={BibleImg} />
          <Button href="/tmp/communityoflove2022.com/test" className={btn}>Learn More</Button>
        </div>
      )}

      {/* for desktop viewport  */}
      {!matchedSm && (
        <div id="cafe" className={divWrapper}>
          <div className={leftWrapper}>
            <h1 className={h1Style}>The Branch Of Zion</h1>
            <h2 className={theHeartH1Style}>What Feeds The Community</h2>
            <p className={h1Style}>Matthew 5:13</p>
            <p className={matthew513}>
              “Ye are the salt of the earth: but if the salt have lost his
              savour, wherewith shall it be salted? it is thenceforth good for
              nothing, but to be cast out, and to be trodden under foot of men.”
            </p>
            <div className={listWrapper}>
              <p style={{ margin: "0" }}>Volunteer Network</p>
              <p style={{ margin: "0" }}>Spiritual Guidance</p>
              <p style={{ margin: "0" }}>Emotional Assistance</p>
              <p style={{ margin: "0" }}>Physical Needs</p>
            </div>
            <Button href="/tmp/communityoflove2022.com/test" className={btn}>Learn More</Button>
          </div>
          <div className={rightWrapper}>
            <Image src={Logo} className={logoStyle} />
            <Image className={bibleImg} src={BibleImg} />
          </div>
        </div>
      )}
    </>
  );
};
export default Cafe;

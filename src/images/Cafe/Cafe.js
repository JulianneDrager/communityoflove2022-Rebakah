import React from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import CafeStyle from "./Cafe.module.css";
import Logo from "../../images/mobile-cafe/gods-gospel-cafe.png";
import BibleImg from "../../images/mobile-cafe/bible-and-cross-icon.png"

const Cafe = () => {
  const logoStyle = CafeStyle.logoStyle;
  const h1Style = CafeStyle.h1Style;
  const btn = CafeStyle.btn;
  const divWrapper = CafeStyle.divWrapper;
  const listWrapper = CafeStyle.listWrapper;
  const bibleImg = CafeStyle.bibleImg;
  return (
    <>
      <div className={divWrapper}>
        <Image src={Logo} className={logoStyle} />
        <h1 className={h1Style}>Services From</h1>
        <h1>The Heart Of God</h1>
        <div className={listWrapper}>
          <p style={{margin:"0"}}>Volunteer Network</p>
          <p style={{margin:"0"}}>Spiritual Guidance</p>
          <p style={{margin:"0"}}>Emotional Assistance</p>
          <p style={{margin:"0"}}>Physical Needs</p>
        </div>
        <Image className={bibleImg} src={BibleImg}/>
        <Button className={btn}>Learn More</Button>
      </div>
    </>
  );
};
export default Cafe;

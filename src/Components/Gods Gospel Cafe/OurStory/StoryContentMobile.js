import React from "react";
import { Col, Button } from "react-bootstrap";
import OurStoryStyle from "./css/OurStoryStyle.module.css";

const StoryContentMobile = () => {
  const btn = OurStoryStyle.btn;
  const divWrapper = OurStoryStyle.divWrapper;
  const pStyle = OurStoryStyle.pStyle;
  const hrStyle = OurStoryStyle.hrStyle;

  return (
    <>
      <Col>
        <div className={divWrapper}>
          <p className={pStyle}>
            God’s Gospel Cafe Network is a non-profit organization humbly
            providing an atmosphere filled with Christ, love, and compassion.
            <hr className={hrStyle}/>
            With a variety of products and services served to all organizations,
            and communities of every age. We meet the needs of every individual
            by providing spiritual guidance, emotional support, financial
            assistance, volunteering aid, and physical aid. 
            <hr className={hrStyle}/>Supplying resources,
            materials, and, refreshments to customers of all ages, with
            exceptional customer service.
          </p>
          <Button className={btn}>CASHAPP: $BLSSHRN</Button>
          <Button className={btn}>ZELLE: 347.461.5185</Button>
        </div>
      </Col>
    </>
  );
};
export default StoryContentMobile;
